const express = require('express');
const mongoose = require('mongoose');
const multer = require('multer');
const fs = require('fs');
const path =require('path');



const fileSchema = require('../module/sliderModel');



class slider {
    static postslider= async (req, res) => {

        const imagePath = req.file.path;
        const filePath = imagePath;
        const fileName = path.basename(filePath);
      
        try {
          const fileData = {
            name:fileName ,
            path: filePath,
            mimetype: req.file.mimetype,
          };
          const file = await fileSchema.create(fileData);
          res.status(201).json(file);
        } catch (error) {
          console.error(error);
          res.status(500).send('Server error');
        }
      };



static getallfiles =async (req, res) => {
    try {
      const files = await fileSchema.find();
      res.json(files);
    } catch (error) {
      console.error(error);
      res.status(500).send('Server error');
    }
  };
  


  static getspacificfiles =async (req, res) => {
    try {
      const file = await fileSchema.findById(req.params.id);
      if (!file) {
        return res.status(404).send('File not found');
      }
      res.set('Content-Type', file.mimetype);
      fs.createReadStream(file.path).pipe(res);
    } catch (error) {
      console.error(error);
      res.status(500).send('Server error');
    }
  };


  static updateFile = async (req, res) => {
    try {
      const file = await fileSchema.findById(req.params.id);
      if (!file) {
        return res.status(404).send('File not found');
      }
      if (fs.existsSync(file.path)) {
        fs.unlinkSync(file.path);
        const imagePath = req.file.path;
        const filePath = imagePath;
        const fileName = path.basename(filePath);
        file.name = fileName;
        file.path = filePath;
        file.mimetype = req.file.mimetype;
        await file.save();
        res.json(file);
      } else {
        res.status(404).send('File not found in file system');
      }
    } catch (error) {
      console.error(error);
      res.status(500).send('Server error');
    }
  };

  static deleteFiles = async (req, res) => {
    try {
      const file = await fileSchema.findByIdAndDelete(req.params.id);
      if (!file) {
        return res.status(404).send('File not found');
      }
      if (fs.existsSync(file.path)) {
        fs.unlinkSync(file.path);
      return  res.send('File deleted');
      } else {
      return  res.send('File deleted');

      }
    } catch (error) {
      console.error(error);
      res.status(500).send('Server error');
    }
  };
  
  





}
module.exports=slider