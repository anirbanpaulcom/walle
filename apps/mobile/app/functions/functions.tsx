import React from 'react';
import {
  Home,
  ShoppingCart,
  Music,
  BookOpen,
  Film,
  Utensils,
  ShoppingBag,
  House,
  CreditCard,
  PiggyBank,
  UserRound,
  LayoutGrid,
  MessageSquareDashed,
  HandCoins,
  ReceiptIndianRupee,
  MapPin,
  LayoutList,
  Heart,
  Sliders,
  Coins,
} from 'lucide-react-native';
import Categories, {expensesCategories} from '../constains/catagories';

const iconMap = {
  cash: <Coins color="black" size={30} />,
  card: <CreditCard color="black" size={30} />,
  savings: <PiggyBank color="black" size={30} />,
  investments: <LayoutGrid color="black" size={30} />,
  loans: <MessageSquareDashed color="black" size={30} />,
  other: <HandCoins color="black" size={30} />,

  shopping: <ShoppingCart color="black" size={30} />,
  food: <Utensils color="black" size={30} />,
  entertainment: <Music color="black" size={30} />,
  transportation: <BookOpen color="black" size={30} />,
  health: <Film color="black" size={30} />,
  utilities: <House color="black" size={30} />,

  salary: <ReceiptIndianRupee color="black" size={30} />,
  music: <Music color="black" size={30} />,
  science: <BookOpen color="black" size={30} />,
  technology: <Home color="black" size={30} />,
  art: <Film color="black" size={30} />,
  groceries: <ShoppingBag color="black" size={30} />,
  home: <House color="black" size={30} />,
  travel: <MapPin color="black" size={30} />,
  education: <LayoutList color="black" size={30} />,
  'personal care': <Heart color="black" size={30} />,
  miscellaneous: <Sliders color="black" size={30} />,
  all: <Home color="black" size={30} />,
  profile: <UserRound color="black" size={30} />,
  profilefocus: <UserRound color="black" size={30} fill={'#000000'} />,
  income: <LayoutGrid color="black" size={30} />,
  incomefocus: <LayoutGrid color="black" size={30} fill={'#000000'} />,
  transaction: <MessageSquareDashed color="black" size={30} />,
  transactionfocus: (
    <MessageSquareDashed color="black" size={30} fill={'#000000'} />
  ),
  expence: <HandCoins color="black" size={30} />,
  expencefocus: <HandCoins color="black" size={30} fill={'#000000'} />,
};

export const getIcon = (type: string) => {
  return iconMap[type.toLowerCase()] || null;
};

export const getColor = (type: string) => {
  const category = Categories.find(category => category.type === type);
  return category ? category.color : '#e8e8e8';
};
