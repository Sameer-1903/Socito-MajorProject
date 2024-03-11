<<<<<<< HEAD
const cloudinary = require("cloudinary").v2;
const dotenv = require("dotenv");
dotenv.config();

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY_CLOUDINAIRE,
  api_secret: process.env.API_SECRET_CLOUDINAIRE,
  secure: true,
});

const cloudinaryUploadImgAvatar = async (fileUpload) => {
  return new Promise((resolve, reject) => {
    cloudinary.uploader.upload(
      fileUpload,
      {
        folder: "Socito-MajorProject/avatar",
        resource_type: "auto",
      },
      (error, result) => {
        if (error) {
          reject(error);
        } else {
          resolve({
            url: result.secure_url,
            asset_id: result.asset_id,
            public_id: result.public_id.split("/")[2],
          });
        }
      }
    );
  });
};

const cloudinaryUploadImgPost = async (fileUpload) => {
  return new Promise((resolve, reject) => {
    cloudinary.uploader.upload(
      fileUpload,
      {
        folder: "Socito-MajorProject/post",
        resource_type: "auto",
      },
      (error, result) => {
        if (error) {
          reject(error);
        } else {
          resolve({
            url: result.secure_url,
            asset_id: result.asset_id,
            public_id: result.public_id.split("/")[2],
          });
        }
      }
    );
  });
};

const cloudinaryUploadImgMessages = async (fileUpload) => {
    return new Promise((resolve, reject) => {
      cloudinary.uploader.upload(
        fileUpload,
        {
          folder: "Socito-MajorProject/messages",
          resource_type: "auto",
        },
        (error, result) => {
          if (error) {
            reject(error);
          } else {
            resolve({
              url: result.secure_url,
              asset_id: result.asset_id,
              public_id: result.public_id.split("/")[2],
            });
          }
        }
      );
    });
  };
  
  const cloudinaryDeleteImgAvatar = async (publicId) => {
    return new Promise((resolve, reject) => {
      cloudinary.uploader.destroy(
        `Socito-MajorProject/avatar/${publicId}`,
        (error, result) => {
          if (error) {
            reject(error);
          } else {
            resolve({
              url: result.secure_url,
              asset_id: result.asset_id,
              public_id: result.public_id,
            });
          }
        }
      );
    });
  };
  
  const cloudinaryDeleteImgPost = async (publicId) => {
    return new Promise((resolve, reject) => {
      cloudinary.uploader.destroy(
        `Socito-MajorProject/post/${publicId}`,
        (error, result) => {
          if (error) {
            reject(error);
          } else {
            resolve({
              url: result.secure_url,
              asset_id: result.asset_id,
              public_id: result.public_id,
            });
          }
        }
      );
    });
  };
  
  const cloudinaryDeleteImgMessages = async (publicId) => {
    return new Promise((resolve, reject) => {
      cloudinary.uploader.destroy(
        `Socito-MajorProject/messages/${publicId}`,
        (error, result) => {
          if (error) {
            reject(error);
          } else {
            resolve({
              url: result.secure_url,
              asset_id: result.asset_id,
              public_id: result.public_id,
            });
          }
        }
      );
    });
  };
  
  module.exports = {
    cloudinaryUploadImgAvatar,
    cloudinaryUploadImgPost,
    cloudinaryUploadImgMessages,
    cloudinaryDeleteImgAvatar,
    cloudinaryDeleteImgPost,
    cloudinaryDeleteImgMessages,
  };
=======
import {v2 as cloudinary} from "cloudinary"
import fs from "fs"


cloudinary.config({ 
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
  api_key: process.env.CLOUDINARY_API_KEY, 
  api_secret: process.env.CLOUDINARY_API_SECRET 
});

const uploadOnCloudinary = async (localFilePath) => {
    try {
        if (!localFilePath) return null
        //upload the file on cloudinary
        const response = await cloudinary.uploader.upload(localFilePath, {
            resource_type: "auto"
        })
        // file has been uploaded successfull
        //console.log("file is uploaded on cloudinary ", response.url);
        fs.unlinkSync(localFilePath)
        return response;

    } catch (error) {
        fs.unlinkSync(localFilePath) // remove the locally saved temporary file as the upload operation got failed
        return null;
    }
}



export {uploadOnCloudinary}
>>>>>>> SM-5-post-details-page
