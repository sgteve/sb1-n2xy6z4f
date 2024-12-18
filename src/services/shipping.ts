import { Address } from '../types';

const SHIPPING_ZONES = {
  ZONE_1: ['75', '77', '78', '91', '92', '93', '94', '95'],
  ZONE_2: ['27', '28', '45', '60', '76', '80'],
  ZONE_3: ['autres']
};

const BASE_SHIPPING_RATES = {
  ZONE_1: 49,
  ZONE_2: 69,
  ZONE_3: 89
};

export const calculateShippingCost = (
  address: Address,
  totalWeight: number,
  totalPrice: number
): number => {
  const postalCode = address.postalCode.substring(0, 2);
  
  // Livraison gratuite pour les commandes > 1500€
  if (totalPrice > 1500) return 0;

  // Déterminer la zone
  let zone = 'ZONE_3';
  if (SHIPPING_ZONES.ZONE_1.includes(postalCode)) {
    zone = 'ZONE_1';
  } else if (SHIPPING_ZONES.ZONE_2.includes(postalCode)) {
    zone = 'ZONE_2';
  }

  // Calcul du coût de base selon la zone
  let cost = BASE_SHIPPING_RATES[zone];

  // Supplément pour les produits lourds (>100kg)
  if (totalWeight > 100) {
    cost += Math.ceil((totalWeight - 100) / 50) * 20;
  }

  return cost;
};

export const validateAddress = (address: Address): string[] => {
  const errors: string[] = [];

  if (!address.street.trim()) {
    errors.push('L\'adresse est requise');
  }
  if (!address.city.trim()) {
    errors.push('La ville est requise');
  }
  if (!/^\d{5}$/.test(address.postalCode)) {
    errors.push('Le code postal doit contenir 5 chiffres');
  }
  if (!address.firstName.trim()) {
    errors.push('Le prénom est requis');
  }
  if (!address.lastName.trim()) {
    errors.push('Le nom est requis');
  }
  if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(address.email)) {
    errors.push('L\'email n\'est pas valide');
  }
  if (!/^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$/.test(address.phone)) {
    errors.push('Le numéro de téléphone n\'est pas valide');
  }

  return errors;
};