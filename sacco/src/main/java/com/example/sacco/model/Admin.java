// src/main/java/com/example/sacco/model/Admin.java
package com.example.sacco.model;

import jakarta.persistence.*;


@Entity
public class Admin {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String username;
    private String password;

    // Getters and setters
}