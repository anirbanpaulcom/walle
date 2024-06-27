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
} from 'lucide-react-native';

const iconMap = {
  food: <Utensils color="black" size={30} />,
  shopping: <ShoppingCart color="black" size={30} />,
  music: <Music color="black" size={30} />,
  science: <BookOpen color="black" size={30} />,
  technology: <Home color="black" size={30} />,
  art: <Film color="black" size={30} />,
  groceries: <ShoppingBag color="black" size={30} />,
  home: <House color="black" size={30} />,
  cash: <CreditCard color="black" size={30} />,
  card: <CreditCard color="black" size={30} />,
  savings: <PiggyBank color="black" size={30} />,
  all: <Home color="black" size={30} />, // Assuming Home icon for "all"
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

const getIcon = (type: string) => {
  return iconMap[type.toLowerCase()] || null;
};

export default getIcon;
