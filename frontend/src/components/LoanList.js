import React, { useState } from 'react';

function LoanList() {
  // Dummy data with different statuses
  const initialLoans = [
    {
      id: 1,
      amount: 5000,
      status: 'pending',
      creationTime: '2024-02-15T10:30:00Z',
      borrower: 'John Doe'
    },
    {
      id: 2,
      amount: 7500,
      status: 'approved',
      creationTime: '2024-02-14T15:45:00Z',
      borrower: 'Jane Smith'
    },
    {
      id: 3,
      amount: 10000,
      status: 'disbursed',
      creationTime: '2024-02-13T09:20:00Z',
      borrower: 'Mike Johnson'
    },
    {
      id: 4,
      amount: 3000,
      status: 'rejected',
      creationTime: '2024-02-12T14:15:00Z',
      borrower: 'Sarah Williams'
    },
    {
      id: 5,
      amount: 15000,
      status: 'pending',
      creationTime: '2024-02-11T11:00:00Z',
      borrower: 'Robert Brown'
    }
  ];

  const [loans, setLoans] = useState(initialLoans);

  const updateLoanStatus = (id, newStatus) => {
    setLoans(loans.map(loan => 
      loan.id === id ? { ...loan, status: newStatus } : loan
    ));
  };

  const getStatusColor = (status) => {
    const colors = {
      pending: '#ff9800',
      approved: '#4caf50',
      disbursed: '#2196f3',
      rejected: '#f44336'
    };
    return colors[status] || '#ff9800';
  };

  const ActionButton = ({ onClick, disabled, children, status }) => (
    <button
      onClick={onClick}
      disabled={disabled}
      style={{
        padding: '0.6rem 1rem',
        borderRadius: '8px',
        border: 'none',
        background: disabled 
          ? 'rgba(255, 255, 255, 0.1)'
          : 'linear-gradient(135deg, #9c27b0 0%, #311b92 100%)',
        color: 'white',
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.5 : 1,
        transition: 'transform 0.2s',
        marginLeft: '0.5rem',
        fontSize: '0.9rem'
      }}
    >
      {children}
    </button>
  );

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #9c27b0 0%, #311b92 100%)',
      padding: '2rem',
      fontFamily: 'Arial, sans-serif'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        background: 'rgba(255, 255, 255, 0.1)',
        backdropFilter: 'blur(10px)',
        borderRadius: '16px',
        padding: '2rem',
        boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
        border: '1px solid rgba(255, 255, 255, 0.18)'
      }}>
        <h2 style={{
          color: 'white',
          fontSize: '2rem',
          marginBottom: '2rem',
          textAlign: 'center'
        }}>Loan List</h2>
        
        <div style={{
          display: 'grid',
          gap: '1rem'
        }}>
          {loans.map((loan) => (
            <div key={loan.id} style={{
              background: 'rgba(255, 255, 255, 0.05)',
              borderRadius: '12px',
              padding: '1.5rem',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              border: '1px solid rgba(255, 255, 255, 0.1)'
            }}>
              <div style={{
                display: 'flex',
                gap: '2rem',
                color: 'white'
              }}>
                <div>
                  <div style={{ fontSize: '0.9rem', opacity: '0.7' }}>Amount</div>
                  <div style={{ fontSize: '1.2rem' }}>${loan.amount}</div>
                </div>
                <div>
                  <div style={{ fontSize: '0.9rem', opacity: '0.7' }}>Borrower</div>
                  <div style={{ fontSize: '1.2rem' }}>{loan.borrower}</div>
                </div>
                <div>
                  <div style={{ fontSize: '0.9rem', opacity: '0.7' }}>Status</div>
                  <div style={{
                    fontSize: '1.2rem',
                    color: getStatusColor(loan.status)
                  }}>{loan.status.charAt(0).toUpperCase() + loan.status.slice(1)}</div>
                </div>
                <div>
                  <div style={{ fontSize: '0.9rem', opacity: '0.7' }}>Created</div>
                  <div style={{ fontSize: '1.2rem' }}>{new Date(loan.creationTime).toLocaleDateString()}</div>
                </div>
              </div>
              
              <div style={{
                display: 'flex',
                gap: '0.5rem'
              }}>
                <ActionButton
                  onClick={() => updateLoanStatus(loan.id, 'approved')}
                  disabled={loan.status !== 'pending'}
                >
                  Approve
                </ActionButton>
                <ActionButton
                  onClick={() => updateLoanStatus(loan.id, 'disbursed')}
                  disabled={loan.status !== 'approved'}
                >
                  Disburse
                </ActionButton>
                <ActionButton
                  onClick={() => updateLoanStatus(loan.id, 'rejected')}
                  disabled={loan.status !== 'pending'}
                >
                  Reject
                </ActionButton>
              </div>
            </div>
          ))}
        </div>
        <button type="submit"style={{
              padding: '0.8rem',
              borderRadius: '8px',
              border: 'none',
              background: 'linear-gradient(135deg, #9c27b0 0%, #311b92 100%)',
              color: 'white',
              fontWeight: 'bold',
              cursor: 'pointer',
              transition: 'transform 0.2s',
              marginTop: '1rem'
            }}><a href="/" style={{ color: 'white', textDecoration: 'none' }}>Back</a></button>
      </div>
    </div>
  );
}

export default LoanList;