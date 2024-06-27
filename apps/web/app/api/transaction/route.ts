import { NextRequest, NextResponse } from 'next/server';
import UserModel,{ Transaction }  from '@/app/lib/database/model';
import { connectToDatabase } from '@/app/lib/database/mongodb';

export async function POST(req: NextRequest) {
  try {
    await connectToDatabase();

    const { UserId, type, method, category, amount, date, description } = await req.json();

    let user = await UserModel.findOne({ UserId });

    if (!user) {
      return NextResponse.json({ error: 'User not found' });
    }

    const newTransaction: Transaction = {
        type,
        method,
        category,
        amount,
        date: new Date(date),
        description: description,
    };

    if (type === 'income') {
      const balanceToUpdate = user.balance.find((balance) => balance.type === method);
      if (balanceToUpdate) {
        balanceToUpdate.amount += amount;
      } else {
        user.balance.push({ type: method, amount });
      }
    } else if (type === 'expense') {
      const balanceToUpdate = user.balance.find((balance) => balance.type === method);
      if (balanceToUpdate) {
        if (balanceToUpdate.amount >= amount) {
          balanceToUpdate.amount -= amount;
        } else {
          return NextResponse.json({ error: 'Insufficient balance' });
        }
      } else {
        return NextResponse.json({ error: 'Balance not found' });
      }
    } else {
      return NextResponse.json({ error: 'Invalid transaction type' });
    }

    user.transactions.push(newTransaction);

    await user.save();

    return NextResponse.json(user);
  } catch (error) {
    console.error('Error creating transaction:', error);
    return NextResponse.json({ error: 'Failed to create transaction' });
  }
}


// export async function DELETE(req: NextRequest) {
//   try {
//     await connectToDatabase();

//     const { userId, transactionId } = await req.json();

//     let user = await UserModel.findById(userId);

//     if (!user) {
//       return NextResponse.json({ error: 'User not found' });
//     }

//     const transactionIndex = user.transactions.findIndex(
//       (transaction) => transaction._id.toString() === transactionId
//     );

//     if (transactionIndex === -1) {
//       return NextResponse.json({ error: 'Transaction not found' });
//     }

//     user.transactions.splice(transactionIndex, 1);

//     await user.save();

//     return NextResponse.json(user);
//   } catch (error) {
//     console.error('Error deleting transaction:', error);
//     return NextResponse.json({ error: 'Failed to delete transaction' });
//   }
// }

