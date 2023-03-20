const mongoose = require('mongoose');

const loanSchema = new mongoose.Schema({
/*************************************************/
  LOAN_TYPE: String,
/*************************************************/
  AMOUNT: Number,
/*************************************************/
  INTEREST_RATE: Number,
/*************************************************/
  LOAN_TERMS: String,
/*************************************************/
  START_DATE: { 
    type: Date, 
    default: Date.now,
    require: true
  },
/*************************************************/
  IS_DELETED: { 
    type: Boolean, 
    default: false 
  }
},  
{
    timestamps: { createdAt: 'CREATED_DATE', updatedAt: 'MODIFIED_DATE' }
});


const Loan = mongoose.model('Loan', loanSchema);
module.exports = Loan;