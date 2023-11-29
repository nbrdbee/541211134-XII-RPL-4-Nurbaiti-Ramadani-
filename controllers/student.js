const Student = require("../models/Student");

module.exports = {
  // get all students
  index: async (req, res) => {
    try {
      const students = await Student.find()
      if (students.length > 0) {
        res.status(200).json({
          status: true,
          data: students,
          method: req.method,
          url: req.url,
        })
      } else {
        res.json({
          status: false,
          message: "Data masih kosong",
        })
      }
      
    } catch (error) {
      res.status(400).json({sucess: false})
    }
    
  },
  // get a student
  show: async (req, res) => {
    try {
      const student = await Student.findById(req.params.id)
      res.json({
        status: true,
        data: student,
        method: req.method,
        url: req.url,
        message: "Data berhasil didapat",
      })

    } catch (error) {
      res.status(400).json({success: false})
    }

  },
  store: async (req, res) => {
    try {
      const student = await Student.create(req.body)
      res.status(200).json({
        status: true,
        data: student,
        method: req.method,
        url: req.url,
        message: "Data berhasil ditambahkan",
      })
    } catch (error) {
      res.status(400).json({success: false})
    }
  },
  update: async (req, res) => {
    try {
      const student = await Student.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true
      })
      res.json({
        status: true,
        data: student,
        method: req.method,
        url: req.url,
        message: "Data berhasil diubah",
      })

    } catch (error) {
      res.status(400).json({success: false})
    }
    
  },
  delete: async (req, res) => {
    try {
      await Student.findByIdAndDelete(req.params.id)
      res.json({
        status: true,
        method: req.method,
        url: req.url,
        message: "Data berhasil dihapus",
      })
    } catch (error) {
      res.status(400).json({success: false})
    }
    const id = req.params.id;
    students = students.filter((student) => student.id != id);

  }
}
