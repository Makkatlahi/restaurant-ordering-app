# 🍕 Jimmy's Diner - Restaurant Ordering App

A modern, interactive web application for ordering food from Jimmy's Diner. Built with vanilla JavaScript, HTML, and CSS, this app provides a seamless ordering experience with real-time cart management and payment processing.

![Jimmy's Diner](./assets/images/restaurant-ordering-hero-img.jpg)

## 🚀 Features

### 🍽️ Menu Display
- **Interactive Menu**: Browse through delicious food items with emoji icons
- **Item Details**: View ingredients and prices for each menu item
- **Responsive Design**: Clean, modern interface that works on all devices

### 🛒 Cart Management
- **Add Items**: Click the "+" button to add items to your order
- **Remove Items**: Individual remove buttons for each order item
- **Duplicate Handling**: Add multiple quantities of the same item
- **Smart Removal**: Remove individual instances without affecting other duplicates
- **Real-time Total**: Automatic price calculation as you modify your order
- **Auto-hide Cart**: Cart automatically hides when empty

### 💳 Payment System
- **Modal Payment Form**: Secure-looking payment interface
- **Form Validation**: Required field validation for name, card number, and CVV
- **Order Confirmation**: Personalized confirmation message after payment
- **Visual Feedback**: Background blur effect during payment process

### 🎨 User Experience
- **Smooth Interactions**: Intuitive click-based interface
- **Visual States**: Clear visual feedback for all user actions
- **Error Prevention**: Form validation prevents incomplete submissions
- **Responsive Layout**: Optimized for desktop and mobile viewing

## 🛠️ Technologies Used

- **HTML5**: Semantic markup structure
- **CSS3**: Modern styling with flexbox layout
- **Vanilla JavaScript**: 
  - ES6 modules
  - Event delegation
  - DOM manipulation
  - Array methods (filter, reduce, forEach)
  - FormData API
- **Google Fonts**: Smythe and Inter font families

## 📁 Project Structure

```
restaurant-ordering-app/
├── index.html          # Main HTML structure
├── index.css           # Styles and layout
├── index.js            # Main application logic
├── data.js             # Menu data and exports
├── assets/
│   └── images/
│       └── restaurant-ordering-hero-img.jpg
└── README.md
```

## 🏃‍♂️ Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Local web server (for ES6 module support)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Makkatlahi/restaurant-ordering-app.git
   cd restaurant-ordering-app
   ```

2. **Start a local server**
   
   **Option 1: Using Python**
   ```bash
   # Python 3
   python -m http.server 8000
   
   # Python 2
   python -m SimpleHTTPServer 8000
   ```
   
   **Option 2: Using Node.js (npx)**
   ```bash
   npx serve .
   ```
   
   **Option 3: Using Live Server (VS Code)**
   - Install Live Server extension
   - Right-click `index.html` → "Open with Live Server"

3. **Open in browser**
   ```
   http://localhost:8000
   ```

## 🎯 How to Use

1. **Browse Menu**: View available food items with prices and ingredients
2. **Add to Cart**: Click the "+" button next to items you want to order
3. **Manage Order**: 
   - View your order summary in the cart section
   - Remove individual items using "remove" buttons
   - See real-time total updates
4. **Complete Order**: Click "Complete Order" to open payment form
5. **Payment**: Fill in required details (name, card number, CVV)
6. **Confirmation**: Receive personalized order confirmation

## 🔧 Key Functions

### Core Functions

- **`renderMenuItems()`**: Displays menu items from data array
- **`renderOrder()`**: Updates cart display and calculates total
- **`renderModal()`**: Shows payment form modal
- **`renderConfirmationMessage(name)`**: Displays order confirmation

### Event Handling

- **Add Item**: Filters menu array, adds to order, renders updated cart
- **Remove Item**: Removes specific item instance, updates display
- **Form Submission**: Validates form, processes payment, shows confirmation

## 🎨 Styling Features

- **Custom Typography**: Smythe font for headings, Inter for body text
- **Background Image**: Hero section with restaurant image
- **Responsive Layout**: Flexible design adapting to screen sizes
- **Interactive Elements**: Hover effects and button styling
- **Modal System**: Overlay modal with blur background effect

## 🔄 Data Flow

1. **Menu Data** → `data.js` exports menu array
2. **User Interaction** → Event listeners capture clicks
3. **State Management** → Order array maintains cart state
4. **DOM Updates** → Functions render current state
5. **Form Processing** → FormData API handles payment
6. **Confirmation** → Success message completes flow

## 🐛 Known Issues & Limitations

- **Local Storage**: Cart doesn't persist on page refresh
- **Payment Processing**: Mock payment (no actual transaction)
- **Menu Management**: Static menu items (no admin interface)
- **User Accounts**: No user authentication or order history

## 🚀 Future Enhancements

- [ ] **Persistent Cart**: LocalStorage for cart persistence
- [ ] **User Accounts**: Login/signup functionality
- [ ] **Order History**: Track previous orders
- [ ] **Admin Panel**: Menu item management
- [ ] **Real Payments**: Stripe/PayPal integration
- [ ] **Delivery Tracking**: Order status updates
- [ ] **Mobile App**: Progressive Web App features

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Makkatlahi**
- GitHub: [@Makkatlahi](https://github.com/Makkatlahi)

## 🙏 Acknowledgments

- Google Fonts for typography
- Modern CSS techniques for responsive design
- Vanilla JavaScript best practices
- Form validation and accessibility standards

---

**Built with ❤️ and vanilla JavaScript**
