# GoHighLevel Webhook Configuration Guide

Complete setup for tracking bookings in Google Analytics 4.

---

## Overview

GoHighLevel (GHL) sends booking events to your backend server via webhooks, which then forwards them to Google Analytics 4 for tracking.

### Data Flow
```
GoHighLevel Booking
    ↓
Webhook Event Fired
    ↓
Your Backend Server Receives
    ↓
Verifies Signature
    ↓
Sends to GA4 (G-HK9RZRN4Y2)
    ↓
Data Appears in Analytics
```

---

## Step 1: Configure Webhooks in GoHighLevel

### Access Webhook Settings

1. Log into GoHighLevel Dashboard
2. Go to: **Settings > Integrations > Webhooks**
3. Click: **"Create Webhook"** or **"Add Webhook"**

---

## Step 2: Create Webhook Events

Create 5 separate webhooks for each event type:

### Webhook #1: Contact Created

**Event Type**: `contact.created` (or `lead.created`)

**Webhook URL**: 
```
https://yourdomain.com/webhook/gohighlevel
```

**Active**: Toggle ON

**Test Webhook**: Click to verify connection

---

### Webhook #2: Appointment Scheduled

**Event Type**: `appointment.scheduled` (or `appointment.created`)

**Webhook URL**: 
```
https://yourdomain.com/webhook/gohighlevel
```

**Active**: Toggle ON

---

### Webhook #3: Booking Confirmed (MAIN)

**Event Type**: `booking.confirmed` (or `booking.completed`)

**Webhook URL**: 
```
https://yourdomain.com/webhook/gohighlevel
```

**Active**: Toggle ON

**Note**: This is your PRIMARY CONVERSION event

---

### Webhook #4: Payment Received

**Event Type**: `payment.received`

**Webhook URL**: 
```
https://yourdomain.com/webhook/gohighlevel
```

**Active**: Toggle ON

---

### Webhook #5: Booking Cancelled

**Event Type**: `booking.cancelled`

**Webhook URL**: 
```
https://yourdomain.com/webhook/gohighlevel
```

**Active**: Toggle ON

---

## Step 3: Get Webhook Secret

1. In GHL Webhooks settings, find your webhook
2. Look for "Secret" or "Webhook Secret"
3. Copy this value
4. Save in your backend `.env` file as: `GHL_WEBHOOK_SECRET`

Example:
```env
GHL_WEBHOOK_SECRET=your_secret_key_here
```

---

## Step 4: Test Webhook Delivery

### Test in GHL Dashboard

1. Create a test booking in GHL
2. Go to webhook settings
3. Look for delivery logs
4. Should show "Success" or "200"

### Test in Server Logs

1. Check your server logs
2. Should see: "Webhook received"
3. Should see: "GA4 event sent successfully"

### Test in Google Analytics

1. Go to Google Analytics
2. Click "Real-time"
3. Create a test booking in GHL
4. Watch for `booking_created` event to appear
5. Should appear within 3 seconds

---

## Step 5: Configure Backend Server

### Deployment Location

Deploy webhook handler to:
- ✅ AWS Lambda
- ✅ Google Cloud Functions
- ✅ Vercel Serverless
- ✅ Dedicated server (Node.js)
- ✅ Any server with Node.js

### Environment Variables Required

```env
# Google Analytics 4
GA4_MEASUREMENT_ID=G-HK9RZRN4Y2
GA4_API_SECRET=your_ga4_api_secret_here

# GoHighLevel
GHL_WEBHOOK_SECRET=your_ghl_webhook_secret_here

# Server
PORT=3000
NODE_ENV=production
```

### Where to Get GA4_API_SECRET

1. Go to: Google Analytics > Admin > Data Streams
2. Click: Your web stream (edonahair.com)
3. Scroll to: "Measurement Protocol API secrets"
4. Click: "Create new secret"
5. Copy the secret value

---

## Step 6: Webhook Payload Mapping

### What GHL Sends

When a booking is confirmed, GHL sends this data:

```json
{
  "type": "booking.confirmed",
  "data": {
    "id": "booking_12345",
    "contactId": "contact_67890",
    "customerEmail": "customer@example.com",
    "customerName": "John Doe",
    "customerPhone": "+1-808-555-1234",
    "serviceType": "hair_color",
    "serviceName": "Dimensional Color Treatment",
    "stylistName": "Edona",
    "bookingDate": "2026-09-15",
    "bookingTime": "10:00 AM",
    "duration": 120,
    "totalPrice": 150.00,
    "paymentStatus": "pending",
    "source": "web"
  }
}
```

### How We Map to GA4

The webhook handler converts this to:

```json
{
  "event": "booking_created",
  "params": {
    "transaction_id": "booking_12345",
    "customer_email": "customer@example.com",
    "service_type": "hair_color",
    "value": 150.00,
    "currency": "USD"
  }
}
```

---

## Step 7: Webhook Verification

### Security Measures

✅ **Signature Verification**: Verifies webhook came from GHL  
✅ **Timestamp Validation**: Prevents replay attacks  
✅ **Secret Storage**: Keep secret in environment variable  
✅ **HTTPS Only**: All communication encrypted  

### How It Works

1. GHL signs request with secret: `HMAC-SHA256(payload, secret)`
2. Webhook handler receives request
3. Handler verifies signature matches
4. If verified, processes event
5. If not verified, rejects request

---

## Troubleshooting

### Issue: "Webhook not sending"

**Solutions**:
1. Verify webhook URL is public (not localhost)
2. Ensure URL uses HTTPS
3. Check firewall allows incoming requests
4. Verify webhook is active in GHL
5. Check GHL event is enabled

### Issue: "Webhook receiving but GA4 not updating"

**Solutions**:
1. Verify GA4_MEASUREMENT_ID correct
2. Verify GA4_API_SECRET correct
3. Check server logs for errors
4. Verify network request to GA4 succeeds
5. Check GA4 event name matches

### Issue: "Signature verification failed"

**Solutions**:
1. Verify GHL_WEBHOOK_SECRET is correct
2. Ensure secret not changed in GHL
3. Check secret doesn't have extra spaces
4. Verify webhook payload not modified

### Issue: "Event appears but missing data"

**Solutions**:
1. Check GHL custom fields configured
2. Verify all booking fields populated
3. Check webhook includes all data
4. Add fallback values for missing fields

---

## Monitoring Webhook Health

### Weekly Checklist

- [ ] Create test booking in GHL
- [ ] Verify webhook delivers
- [ ] Check GA4 receives event
- [ ] Verify all parameters present
- [ ] Check no errors in logs

### Monitor Metrics

- Webhook delivery rate (should be 100%)
- Average delivery time (should be < 2 seconds)
- GA4 event appearance time (should be < 5 seconds)
- Error rate (should be < 1%)

---

## Advanced Configuration

### Multiple Webhook Handlers

If you have multiple services:

```
GHL Webhook
    ├→ GA4 Handler
    ├→ Email Notifier
    ├→ Slack Alert
    └→ Database Logger
```

### Retry Logic

If webhook fails, implement retry:
- Retry 1: 1 minute
- Retry 2: 5 minutes
- Retry 3: 15 minutes

### Webhook Queue

For high volume:
- Queue webhook events
- Process asynchronously
- Maintain delivery order

---

## Related Files

- `TRACKING_SETUP.md` - Setup overview
- `GA4_EVENTS_REFERENCE.md` - All tracked events
- `GTM_CONFIGURATION.md` - GTM setup

---

## Support

- GHL Support: https://support.gohighlevel.com
- GHL API Docs: Check GHL Dashboard
- GA4 Help: https://support.google.com/analytics

---

## Implementation Checklist

- [ ] All 5 GHL webhooks created
- [ ] Webhook secret saved securely
- [ ] Backend server deployed
- [ ] Environment variables configured
- [ ] Webhook tested with dummy booking
- [ ] GA4 event appears in Real-time
- [ ] Event parameters verified
- [ ] Monitoring set up
- [ ] Team trained on system
- [ ] Documentation shared
