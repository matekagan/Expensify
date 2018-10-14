
const getTotalExpenses = expenses => (
    {
        totalAmount: expenses.reduce(
            (prevVal, currVal) => prevVal + currVal.amount,
            0
        ),
        expenseCount: expenses.length
    }
);

export default getTotalExpenses;
