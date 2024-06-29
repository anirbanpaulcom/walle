import { NextRequest, NextResponse } from 'next/server';
import UserModel from '@/app/lib/database/model';
import { connectToDatabase } from '@/app/lib/database/mongodb';

export async function POST(req: NextRequest) {
  try {
    await connectToDatabase();
    console.log(req)

    const { number } = await req.json();

    let user = await UserModel.findOne({ number });

    if (!user) {
      user = new UserModel({
        number,
        balance: [
          { type: 'cash', amount: 0 },
          { type: 'card', amount: 0 },
          { type: 'savings', amount: 0 },
          { type: 'investments', amount: 0 },
          { type: 'loans', amount: 0 },
          { type: 'other', amount: 0 },
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

export async function GET(req: NextRequest, { params }: { params: Record<string, string> | undefined }) {
    try {
      await connectToDatabase();
  
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
  