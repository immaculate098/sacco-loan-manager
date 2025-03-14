// src/main/java/com/example/sacco/service/LoanService.java
package com.example.sacco.service;

import com.example.sacco.model.Loan;
import com.example.sacco.repository.LoanRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class LoanService {

    @Autowired
    private LoanRepository loanRepository;

    public Loan createLoan(Loan loan) {
        loan.setStatus("Pending approval");
        return loanRepository.save(loan);
    }

    public List<Loan> getAllLoans() {
        return loanRepository.findAll();
    }

    public Loan approveLoan(Long loanId, String paymentType) {
        Loan loan = loanRepository.findById(loanId).orElseThrow();
        loan.setStatus("Approved");
        // Attach payment type logic here
        return loanRepository.save(loan);
    }

    public Loan changeApproversRequirement(Long loanId, int approversRequired) {
        Loan loan = loanRepository.findById(loanId).orElseThrow();
        loan.setApproversRequired(approversRequired);
        return loanRepository.save(loan);
    }
}