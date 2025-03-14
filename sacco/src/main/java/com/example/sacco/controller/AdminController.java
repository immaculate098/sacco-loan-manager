// src/main/java/com/example/sacco/controller/AdminController.java
package com.example.sacco.controller;

import com.example.sacco.model.Admin;
import com.example.sacco.service.AdminService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/admin")
public class AdminController {

    @Autowired
    private AdminService adminService;

    @PostMapping
    public Admin createAdmin(@RequestBody Admin admin) {
        return adminService.createAdmin(admin);
    }
}
