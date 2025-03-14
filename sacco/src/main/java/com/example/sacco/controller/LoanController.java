// src/main/java/com/example/sacco/controller/LoanController.java
package com.example.sacco.controller;

import com.example.sacco.model.Loan;
import com.example.sacco.service.LoanService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/loans")
public class LoanController {

    @Autowired
    private LoanService loanService;

    @PostMapping
    public Loan createLoan(@RequestBody Loan loan) {
        return loanService.createLoan(loan);
    }

    @GetMapping
    public List<Loan> getAllLoans() {
        return loanService.getAllLoans();
    }

    @PutMapping("/{id}/approve")
    public Loan approveLoan(@PathVariable Long id, @RequestParam String paymentType) {
        return loanService.approveLoan(id, paymentType);
    }

    @PutMapping("/{id}/approvers")
    public Loan changeApproversRequirement(@PathVariable Long id, @RequestParam int approversRequired) {
        return loanService.changeApproversRequirement(id, approversRequired);
    }
}