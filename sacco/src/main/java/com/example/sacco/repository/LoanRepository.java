// src/main/java/com/example/sacco/repository/LoanRepository.java
package com.example.sacco.repository;

import com.example.sacco.model.Loan;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LoanRepository extends JpaRepository<Loan, Long> {
}