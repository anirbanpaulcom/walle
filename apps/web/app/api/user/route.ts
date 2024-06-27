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

export async function GET(req: NextRequest, { params }: { params: { number: string } }) {
  try {
    await connectToDatabase();

    // Ensure params and params.number are defined
    const numberString = '10000000002'

    if (!numberString) {
      return NextResponse.json({ error: 'Missing number parameter' }, { status: 400 });
    }

    const number = parseInt(numberString, 10);

    if (isNaN(number)) {
      return NextResponse.json({ error: 'Invalid number format' }, { status: 400 });
    }

    const user = await UserModel.findOne({ number });

    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    return NextResponse.json(user);
  } catch (error) {
    console.error('Error fetching user details:', error);
    return NextResponse.json({ error: 'Failed to fetch user details' }, { status: 500 });
  }
}
