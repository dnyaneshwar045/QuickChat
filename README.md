# QuickChat

QuickChat is a full-stack chat application built with React (frontend) and Node.js/Express (backend). It supports real-time messaging, user authentication, and profile management.

## Features

- User registration and login
- Real-time chat between users
- Profile management
- Responsive UI
- Secure authentication
- Cloudinary integration for media uploads

## Technologies Used

- **Frontend:** React, Vite, Tailwind CSS
- **Backend:** Node.js, Express
- **Database:** MongoDB
- **Authentication:** JWT
- **Media Storage:** Cloudinary

## Folder Structure

```
client/   # React frontend
server/   # Node.js/Express backend
```

## Getting Started

### Prerequisites

- Node.js and npm installed
- MongoDB database (local or cloud)
- Cloudinary account (for media uploads)

---

### 1. Clone the Repository

```bash
git clone https://github.com/dnyaneshwar045/QuickChat.git
cd QuickChat
```

---

### 2. Setup Backend

```bash
cd server
npm install
```

- Create a `.env` file in the `server` folder with your environment variables:
  ```
  MONGODB_URI=your_mongodb_connection_string
  JWT_SECRET=your_jwt_secret
  CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
  CLOUDINARY_API_KEY=your_cloudinary_api_key
  CLOUDINARY_API_SECRET=your_cloudinary_api_secret
  ```

- Start the backend server:
  ```bash
  npm start
  ```

---

### 3. Setup Frontend

```bash
cd ../client
npm install
```

- Create a `.env` file in the `client` folder with your environment variables:
  ```
  VITE_API_URL=http://localhost:5000
  ```

- Start the frontend development server:
  ```bash
  npm run dev
  ```

---

### 4. Usage

- Open your browser and go to `http://localhost:5173` (or the port shown in your terminal).
- Register a new user or log in.
- Start chatting!

---

## Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](LICENSE)

---

## Contact

For questions or feedback, contact [dnyaneshwar045](https://github.com/dnyaneshwar045).
