import { useState } from "react";
import "./BookingPage.css";

const BookingPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    buffalomilk: 0,
    cowmilk: 0,
    deliveryOption: "daily",
    startDate: "",
    preferredTime: "morning",
    paymentMethod: "cod",
  });

  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    const newValue = type === "number" ? parseInt(value) || 0 : value;
    setFormData((prev) => ({ ...prev, [name]: newValue }));

    setErrors((prev) => ({ ...prev, [name]: null }));

    if (name === "buffalomilk" || name === "cowmilk") {
      const buffaloTotal =
        name === "buffalomilk" ? newValue * 100 : formData.buffalomilk * 100;
      const cowTotal =
        name === "cowmilk" ? newValue * 80 : formData.cowmilk * 80;
      setTotalPrice(buffaloTotal + cowTotal);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);

    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    if (!formData.address.trim()) newErrors.address = "Address is required";
    if (!formData.startDate) newErrors.startDate = "Start date is required";
    if (formData.buffalomilk === 0 && formData.cowmilk === 0)
      newErrors.buffalomilk =
        "At least one milk quantity must be more than zero";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setSubmitting(false);
      return;
    }

    setErrors({});

    setTimeout(() => {
      if (formData.paymentMethod === "online") {
        const options = {
          key: "YOUR_RAZORPAY_KEY", // Replace with your actual Razorpay key
          amount: totalPrice * 100,
          currency: "INR",
          name: "Samala Venkat Reddy Dairy",
          description: "Milk Delivery Booking",
          handler: function (response) {
            alert(
              "Payment successful. Razorpay ID: " + response.razorpay_payment_id
            );
            setSubmitted(true);
          },
          prefill: {
            name: formData.name,
            email: formData.email,
            contact: formData.phone,
          },
          notes: {
            address: formData.address,
          },
          theme: {
            color: "#047857",
          },
        };

        const rzp = new window.Razorpay(options);
        rzp.open();
      } else {
        setSubmitted(true);
      }

      setSubmitting(false);

      setTimeout(() => {
        setFormData({
          name: "",
          email: "",
          phone: "",
          address: "",
          buffalomilk: 0,
          cowmilk: 0,
          deliveryOption: "daily",
          startDate: "",
          preferredTime: "morning",
          paymentMethod: "cod",
        });
        setTotalPrice(0);
        setErrors({});
      }, 5000);
    }, 1000);
  };

  return (
    <div className="booking-container">
      <h1>Book Your Order</h1>
      {submitted && <p className="success">Thank you for your order!</p>}
      <form onSubmit={handleSubmit} noValidate>
        <input
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Full Name"
        />
        {errors.name && <p className="error">{errors.name}</p>}

        <input
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
        />
        {errors.email && <p className="error">{errors.email}</p>}

        <input
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Phone"
        />
        {errors.phone && <p className="error">{errors.phone}</p>}

        <textarea
          name="address"
          value={formData.address}
          onChange={handleChange}
          placeholder="Address"
        />
        {errors.address && <p className="error">{errors.address}</p>}

        <input
          type="number"
          name="buffalomilk"
          value={formData.buffalomilk}
          onChange={handleChange}
          min="0"
          placeholder="Buffalo Milk (₹100/ltr)"
        />
        <input
          type="number"
          name="cowmilk"
          value={formData.cowmilk}
          onChange={handleChange}
          min="0"
          placeholder="Cow Milk (₹80/ltr)"
        />
        {errors.buffalomilk && <p className="error">{errors.buffalomilk}</p>}

        <p>Total: ₹{totalPrice}</p>

        <select
          name="deliveryOption"
          value={formData.deliveryOption}
          onChange={handleChange}
        >
          <option value="daily">Daily</option>
          <option value="alternate">Alternate Days</option>
          <option value="weekly">Weekly</option>
          <option value="onetime">One-time Delivery</option>
        </select>

        <input
          type="date"
          name="startDate"
          value={formData.startDate}
          onChange={handleChange}
        />
        {errors.startDate && <p className="error">{errors.startDate}</p>}

        <select
          name="preferredTime"
          value={formData.preferredTime}
          onChange={handleChange}
        >
          <option value="morning">Morning (6AM - 9AM)</option>
          <option value="evening">Evening (5PM - 8PM)</option>
        </select>

        <div className="payment-method">
          <label>
            <input
              type="radio"
              name="paymentMethod"
              value="cod"
              checked={formData.paymentMethod === "cod"}
              onChange={handleChange}
            />
            Cash on Delivery
          </label>
          <label>
            <input
              type="radio"
              name="paymentMethod"
              value="online"
              checked={formData.paymentMethod === "online"}
              onChange={handleChange}
            />
            Online Payment
          </label>
        </div>

        <button type="submit" disabled={submitting}>
          {submitting ? "Processing..." : "Confirm Order"}
        </button>
      </form>
    </div>
  );
};

export default BookingPage;
