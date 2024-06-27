import { NextRequest, NextResponse } from 'next/server';
import UserModel from '@/app/lib/database/model';
import { connectToDatabase } from '@/app/lib/database/mongodb';
export async function POST(req: NextRequest) {
  try {
    await connectToDatabase();

    const { number } = await req.json();

    let user = await UserModel.findOne({ number });

    if (!user) {
      user = new UserModel({
        number,
        balance: [
          { type: 'Cash', amount: 0 },
          { type: 'Card', amount: 0 },
          { type: 'Savings', amount: 0 },
          { type: 'Investments', amount: 0 },
          { type: 'Loans', amount: 0 },
          { type: 'Other', amount: 0 },
        ],
        transactions: [],
      });
      await user.save();
      return NextResponse.json(user);
    } else {
      return NextResponse.json({ error: 'User already exists' });
    }
  } catch (error) {
    console.error('Error creating user:', error);
    return NextResponse.json({ error: 'Failed to create user' }, { status: 500 });
  }
}
