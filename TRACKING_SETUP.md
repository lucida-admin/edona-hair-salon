# edonahair - GA4 & GTM Tracking Setup Guide

## Quick Overview

Your website has a complete 3-layer tracking system:
- **Google Analytics 4**: G-HK9RZRN4Y2
- **Google Tag Manager**: GTM-N7R44NGS  
- **GoHighLevel Webhooks**: Backend booking tracking

---

## Layer 1: Google Analytics 4 (GA4)

### Measurement ID
```
G-HK9RZRN4Y2
```

### What's Tracked
- Page views and sessions
- User navigation
- Booking intent events
- Portfolio engagement
- Scroll depth
- External links
- Time on page

### Where to Find
- Reports: https://analytics.google.com
- Property: edonahair
- View: All Web Site Data

---

## Layer 2: Google Tag Manager (GTM)

### Container ID
```
GTM-N7R44NGS
```

### How to Access
https://tagmanager.google.com/ → Select GTM-N7R44NGS

### What You Can Do
- Create tags without code changes
- Set up custom events
- Manage conversions
- Create audiences
- Set up remarketing

### Quick Setup
1. Go to GTM dashboard
2. Create GA4 Configuration tag (if not exists)
3. Add Measurement ID: G-HK9RZRN4Y2
4. Create tags for custom events
5. Deploy changes

---

## Layer 3: GoHighLevel Webhooks

### Tracked Events
- Contact Created
- Appointment Scheduled
- Booking Confirmed (PRIMARY CONVERSION)
- Payment Received
- Booking Cancelled

### Setup Location
GoHighLevel Dashboard → Settings → Integrations → Webhooks

### Webhook URL
```
https://yourdomain.com/webhook/gohighlevel
```

### Events to Configure
1. **contact.created** - New lead
2. **appointment.scheduled** - Appointment booked
3. **booking.confirmed** - Booking confirmed (MAIN CONVERSION)
4. **payment.received** - Payment processed
5. **booking.cancelled** - Booking cancelled

---

## Events Being Tracked

### User Engagement Events
- `page_view` - Page loaded
- `session_start` - User session started
- `scroll_depth` - Scroll milestones (25%, 50%, 75%, 100%)
- `time_on_page` - Time spent on page
- `user_engagement` - Active engagement

### Navigation Events
- `nav_menu_click` - Menu clicked
- `smooth_scroll` - Anchor link clicked
- `section_view` - Section viewed

### Booking Events
- `book_now_button_click` - CTA clicked
- `booking_widget_view` - Booking widget visible
- `booking_widget_focus` - User focused on widget
- `booking_form_submitted` - Form submitted

### Content Events
- `portfolio_image_view` - Portfolio image viewed
- `external_link_click` - External link (Instagram, Maps)

### Conversion Events (from GHL)
- `contact_created` - Lead generated
- `appointment_scheduled` - Appointment booked
- `booking_created` - **PRIMARY CONVERSION**
- `payment_received` - Payment processed
- `booking_cancelled` - Booking cancelled

---

## Conversion Goals Setup

### Primary Goal: booking_created
This fires when a customer completes a booking in GoHighLevel.

**Where to Configure**: Google Analytics → Admin → Conversions → Create new conversion event

**Event Name**: `booking_created`

**Parameters Tracked**:
- transaction_id (Booking ID)
- customer_email
- customer_name
- service_type
- booking_date
- booking_time
- value (Price)
- currency (USD)

### Secondary Goals
1. `contact_created` - Lead generation
2. `appointment_scheduled` - Appointment booking
3. `payment_received` - Payment processing

---

## Real-Time Monitoring

### Check GA4 Real-Time
1. Go to Google Analytics
2. Click "Real-time"
3. Should see active users and events updating

### Verify Tracking
1. Visit website
2. Open browser DevTools (F12)
3. Look for ✓ messages in console
4. Check GA4 Real-time for events

### Common Issues

**Events not appearing?**
- Check GTM container deployed
- Verify GA4 measurement ID
- Check ad blocker not blocking Analytics
- Look for errors in browser console

**GHL webhooks not firing?**
- Verify webhook URL correct
- Check webhook secret configured
- Check server/backend running
- Look at server logs

---

## Next Steps

1. **Verify GA4 is collecting data**
   - Go to Google Analytics > Real-time
   - Browse website
   - Should see events appear

2. **Set up conversion goals** (if not done)
   - Create "booking_created" conversion
   - Mark as conversion goal
   - Set up revenue tracking

3. **Configure GTM tags**
   - Create GA4 configuration tag
   - Add any custom tags needed
   - Deploy container

4. **Monitor booking funnel**
   - Track: Widget views → Clicks → Conversions
   - Measure conversion rate
   - Identify optimization opportunities

---

## Documentation Files

Related documentation:
- `TRACKING_EVENTS_REFERENCE.md` - All tracked events
- `GTM_CONFIGURATION.md` - GTM setup instructions
- `WEBHOOK_SETUP.md` - GoHighLevel webhook configuration

## Support

For issues:
1. Check browser console for errors
2. Review GA4 reports for data
3. Check GTM for tag deployment status
4. Verify webhook delivery in GHL dashboard
