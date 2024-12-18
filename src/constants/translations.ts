export const FR = {
  // ... autres traductions existantes ...

  shipping: {
    addressTitle: 'Adresse de livraison',
    errorTitle: 'Erreurs dans le formulaire',
    firstName: 'Prénom',
    lastName: 'Nom',
    email: 'Email',
    phone: 'Téléphone',
    street: 'Adresse',
    postalCode: 'Code postal',
    city: 'Ville',
    deliveryTitle: 'Mode de livraison',
    free: 'Gratuit',
    summary: 'Récapitulatif de la commande',
    subtotal: 'Sous-total',
    deliveryCost: 'Frais de livraison',
    total: 'Total',
    deliveryAddress: 'Adresse de livraison',
    estimatedDelivery: (days: number) => 
      `Livraison estimée sous ${days} jour${days > 1 ? 's' : ''}`,
    
    options: {
      standard: {
        name: 'Livraison standard',
        description: 'Livraison à domicile par transporteur'
      },
      express: {
        name: 'Livraison express',
        description: 'Livraison garantie sous 48h'
      },
      installation: {
        name: 'Livraison avec installation',
        description: 'Livraison et installation par nos équipes'
      }
    }
  }
};