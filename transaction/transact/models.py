from django.db import models

# Create your models here.
# models.py


class Loan(models.Model):
    amount = models.FloatField()
    status = models.CharField(max_length=20)
    creation_time = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Loan {self.pk} - {self.status}"

class Transaction(models.Model):
    loan = models.ForeignKey(Loan, on_delete=models.CASCADE)
    payment_type = models.CharField(max_length=50)
    payment_amount = models.FloatField()

    def __str__(self):
        return f"Transaction {self.pk} - {self.payment_type}"