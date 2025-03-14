// src/main/java/com/example/sacco/repository/AdminRepository.java
package com.example.sacco.repository;

import com.example.sacco.model.Admin;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AdminRepository extends JpaRepository<Admin, Long> {
}
