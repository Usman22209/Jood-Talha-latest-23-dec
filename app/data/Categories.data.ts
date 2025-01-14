/* eslint-disable max-lines */
import React from 'react';
import {
  Beauty,
  Automotive,
  Education,
  Fashion,
  Health,
  Hotel,
  House,
  Resturent,
  Shipping,
  Sports,
  Others
} from 'assets/svgs';
import Colors, { alpha } from 'utils/Colors.util';

type Category = {
  id: number;
  text: string;
  icon: React.ComponentType<any>;
  backgroundColor: string;
  subCategories: any[];
};

const categories: Category[] = [
  {
    id: 1,
    text: 'Automotive',
    icon: Automotive,
    backgroundColor: alpha(Colors.JOOD_PINK, 0.15),
    subCategories: [
      { id: 52, text: 'Bike Dealers' },
      {
        id: 53,
        text: 'Car Accessories',
        subSubCategories: [{ id: 135, text: 'Tinting and Protection Centres' }]
      },
      { id: 2, text: 'Car Dealers' },
      {
        id: 3,
        text: 'Car Rental',
        subSubCategories: [
          { id: 79, text: 'International Car Rental ' },
          { id: 4, text: 'Local Rent Car' }
        ]
      },
      {
        id: 1,
        text: 'Car Service Centers',
        subSubCategories: [
          { id: 98, text: 'Car Wash' },
          { id: 85, text: 'Service Center' },
          { id: 2, text: 'Tyres' }
        ]
      },
      { id: 1, text: 'Golf Cart ' }
    ]
  },
  {
    id: 16,
    text: 'Beauty and SPA',
    icon: Beauty,
    backgroundColor: alpha(Colors.JOOD_GREEN, 0.15),
    subCategories: [
      { id: 74, text: 'Beauty Accessories & Products' },
      {
        id: 72,
        text: 'Saloons',
        subSubCategories: [
          { id: 121, text: 'Men Saloons' },
          { id: 145, text: 'Pet Saloon' },
          { id: 122, text: 'Women Saloons' }
        ]
      },
      { id: 75, text: 'Spa' },
      { id: 73, text: 'Wellness Labs' }
    ]
  },
  {
    id: 5,
    text: 'Education',
    icon: Education,
    backgroundColor: alpha(Colors.JOOD_BLUE, 0.15),
    subCategories: [
      { id: 33, text: 'Education Services' },
      { id: 28, text: 'Nursery' }
    ]
  },
  {
    id: 17,
    text: 'Fashion',
    icon: Fashion,
    backgroundColor: alpha(Colors.JOOD_ORANGE, 0.15),
    subCategories: [
      {
        id: 44,
        text: 'Bags and Footwear',
        subSubCategories: [
          { id: 0, text: 'Women Fashion' } // TODO:
        ]
      },
      {
        id: 89,
        text: 'Clothes',
        subSubCategories: [
          { id: 123, text: 'Abayas' },
          { id: 129, text: 'Kids Fashion' },
          { id: 127, text: 'Men Fashion' },
          { id: 0, text: 'Thobe' }, // TODO:
          { id: 128, text: 'Women Fashion' }
        ]
      },
      { id: 85, text: 'Handbags & Shoes' },
      {
        id: 41,
        text: 'Jewellery and Watches',
        subSubCategories: [
          { id: 125, text: 'Jewelery' },
          { id: 126, text: 'Watches' }
        ]
      },
      { id: 86, text: 'Optics' },
      {
        id: 87,
        text: 'Perfumes & Cosmetic',
        subSubCategories: [{ id: 130, text: 'Perfumes' }]
      },
      {
        id: 98,
        text: 'The Bicester Collection',
        subSubCategories: [
          { id: 161, text: 'Belgium' },
          { id: 15, text: 'France' },
          { id: 160, text: 'Germany' },
          { id: 164, text: 'Ireland' },
          { id: 29, text: 'Italy' },
          { id: 159, text: 'London' },
          { id: 12, text: 'Spain' }
        ]
      }
    ]
  },
  {
    id: 6,
    text: 'Health',
    icon: Health,
    backgroundColor: alpha(Colors.JOOD_PINK, 0.15),
    subCategories: [
      { id: 30, text: 'Dental Centers' },
      {
        id: 31,
        text: 'Dermatology & Beauty Clinics',
        subSubCategories: [{ id: 134, text: 'Medical Centers' }]
      },
      { id: 32, text: 'Diet Centers' },
      {
        id: 29,
        text: 'Medical Centers & Hospital',
        subSubCategories: [
          { id: 133, text: 'Hospital' },
          { id: 134, text: 'Medical Centers' }
        ]
      },
      { id: 45, text: 'Veterinary Hospital' }
    ]
  },
  {
    id: 2,
    text: 'Hotels and Tourism',
    icon: Hotel,
    backgroundColor: alpha(Colors.JOOD_GREEN, 0.15),
    subCategories: [
      { id: 10, text: 'America Hotels' },
      { id: 9, text: 'Asia and Australia Hotels' },
      { id: 7, text: 'Europe and Africa Hotels' },
      { id: 11, text: 'Global Hotels' },
      { id: 8, text: 'Middle East Hotels' },
      { id: 5, text: 'Qatar Hotels' },
      { id: 4, text: 'Tourism and Travel' }
    ]
  },
  {
    id: 3,
    text: 'Households',
    icon: House,
    backgroundColor: alpha(Colors.JOOD_BLUE, 0.15),
    subCategories: [
      { id: 14, text: 'Appliances' },
      { id: 34, text: 'Cleaning & Hospitality' },
      { id: 97, text: 'Cutlery' },
      { id: 37, text: 'Electronics & Appliances ' },
      { id: 37, text: 'Furniture' },
      { id: 35, text: 'Laundry' },
      { id: 95, text: 'Smart Home' }
    ]
  },
  {
    id: 14,
    text: 'Others',
    icon: Others,
    backgroundColor: alpha(Colors.JOOD_ORANGE, 0.15),
    subCategories: [
      { id: 77, text: 'Banks and Exchange' },
      { id: 80, text: 'Chocolates and Flowers' },
      { id: 59, text: 'Construction and materials' },
      { id: 81, text: 'Food Store' },
      { id: 71, text: 'Insurance' },
      { id: 60, text: 'Manpower Service ' },
      { id: 70, text: 'Online Shopping ' },
      { id: 79, text: 'Photography' },
      { id: 99, text: 'Qatar National Day' },
      { id: 13, text: 'Rental apartments Long & Short term' },
      { id: 92, text: 'Shopping Centers' },
      { id: 78, text: 'Telecom' },
      { id: 76, text: 'Wedding Halls and Organizers' }
    ]
  },
  {
    id: 10,
    text: 'Restaurants and Cafes',
    icon: Resturent,
    backgroundColor: alpha(Colors.JOOD_PINK, 0.15),
    subCategories: [
      { id: 47, text: 'Cafes' },
      { id: 49, text: 'Food Delivery' },
      { id: 46, text: 'Restaurants' }
    ]
  },
  {
    id: 13,
    text: 'Shipping and Cargo',
    icon: Shipping,
    backgroundColor: alpha(Colors.JOOD_GREEN, 0.15),
    subCategories: [
      { id: 54, text: 'Air Freight ' },
      { id: 57, text: 'Intl. and local moves' }
    ]
  },
  {
    id: 15,
    text: 'Sports and Entertainment',
    icon: Sports,
    backgroundColor: alpha(Colors.JOOD_BLUE, 0.15),
    subCategories: [
      { id: 69, text: 'Entertainment' },
      { id: 64, text: 'Fitness Centers' },
      { id: 67, text: 'Kids Toys' },
      { id: 65, text: 'Sports Activities' },
      { id: 118, text: 'Theme Parks' }
    ]
  }
];

export default categories;
