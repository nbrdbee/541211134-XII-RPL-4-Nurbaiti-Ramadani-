const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  NIS: {
    type: String,
    required: [true, "Silahkan isikan NIS"],
    unique: true,
  },
  Nama: {
    type: String,
    required: [true, "Silahkan isikan nama"],
    
  },
  Jurusan: {
    type: String,
    required: [true, "Silahkan isikan jurusan"],
    
  },
  Kelas: {
    type: String,
    required: [true, "Silahkan isikan kelas"],
    
  },
  Absen: {
    type: String,
    required: [true, "Silahkan isikan absen"],
    
  },
  
});

module.exports = mongoose.model("student", UserSchema);
