const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const dotenv = require('dotenv');

module.exports = { express, mongoose, bodyParser, bcrypt, dotenv };