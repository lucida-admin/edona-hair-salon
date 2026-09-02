# GA4 Events Reference Guide

Complete list of all events tracked on edonahair website.

---

## Page & Session Events

### page_view
- **Category**: Session
- **Fires**: Every page load
- **Parameters**: page_title, page_location, page_referrer
- **Purpose**: Track page views

### session_start
- **Category**: Session  
- **Fires**: First user interaction
- **Parameters**: session_id, timestamp, page_path
- **Purpose**: Identify user sessions

---

## Navigation Events

### nav_menu_click
- **Category**: Navigation
- **Fires**: When user clicks menu item
- **Parameters**: event_label (menu item text), target_section
- **Purpose**: Track navigation usage

### smooth_scroll
- **Category**: Navigation
- **Fires**: When user clicks anchor link
- **Parameters**: event_label, target_id, scroll_duration_ms
- **Purpose**: Track internal navigation

---

## Booking Intent Events

### book_now_button_click
- **Category**: Booking Intent
- **Fires**: When "Book Now" button clicked
- **Parameters**: button_text, button_location, page_section
- **Purpose**: Track CTA engagement

### booking_widget_view
- **Category**: Booking Engagement
- **Fires**: When booking widget visible in viewport
- **Parameters**: widget_id, widget_provider, page_section, viewport_percentage
- **Purpose**: Track widget impressions

### booking_widget_focus
- **Category**: Booking Engagement
- **Fires**: When user focuses on booking widget
- **Parameters**: widget_provider, interaction_type
- **Purpose**: Track widget interaction

---

## Content Engagement Events

### section_view
- **Category**: Content Engagement
- **Fires**: When section becomes visible
- **Parameters**: event_label (section name), section_id, section_importance
- **Purpose**: Track section engagement

### portfolio_image_view
- **Category**: Content Engagement
- **Fires**: When portfolio image visible
- **Parameters**: event_label (image alt text), image_index, gallery_total_items
- **Purpose**: Track gallery engagement

### scroll_depth
- **Category**: Engagement
- **Fires**: At 25%, 50%, 75%, 100% scroll
- **Parameters**: event_label (percentage), scroll_percentage, engagement_time_msec
- **Purpose**: Measure content consumption

### time_on_page
- **Category**: Engagement
- **Fires**: When user leaves page
- **Parameters**: time_seconds, page_title, page_url
- **Purpose**: Measure page engagement

### external_link_click
- **Category**: Engagement
- **Fires**: When external link clicked
- **Parameters**: event_label, link_url, link_type (social_instagram, maps_location, etc)
- **Purpose**: Track external traffic

### user_engagement
- **Category**: Engagement
- **Fires**: On various engagement actions
- **Parameters**: engagement_type (cta_click, widget_view, etc), conversion_step
- **Purpose**: Measure overall engagement

---

## Error Events

### exception
- **Category**: Error
- **Fires**: When JavaScript error occurs
- **Parameters**: event_label (error message), description, fatal (true/false)
- **Purpose**: Monitor site errors

### booking_error
- **Category**: Error
- **Fires**: When booking error occurs
- **Parameters**: event_label (error message), error_code, error_severity
- **Purpose**: Track booking issues

---

## GoHighLevel Conversion Events

### contact_created
- **Category**: Conversion
- **Source**: GHL Webhook
- **Fires**: When new contact created in GHL
- **Parameters**: 
  - contact_id
  - first_name
  - last_name
  - email
  - phone
  - tags
  - source
- **Purpose**: Track leads generated

### appointment_scheduled
- **Category**: Conversion
- **Source**: GHL Webhook
- **Fires**: When appointment scheduled
- **Parameters**:
  - transaction_id (appointment ID)
  - appointment_date
  - appointment_time
  - duration_minutes
  - service_type
  - value (price)
  - currency
- **Purpose**: Track appointment bookings

### booking_created
- **Category**: Conversion (PRIMARY)
- **Source**: GHL Webhook
- **Fires**: When booking confirmed
- **Parameters**:
  - transaction_id (booking ID) ⭐ REQUIRED
  - customer_email
  - customer_name
  - customer_phone
  - service_type
  - service_name
  - stylist_name
  - booking_date
  - booking_time
  - duration_minutes
  - value (booking price) ⭐ REQUIRED
  - currency (USD)
  - payment_status
  - booking_source
- **Purpose**: PRIMARY CONVERSION TRACKING
- **Note**: Mark as conversion goal in GA4

### payment_received
- **Category**: Conversion
- **Source**: GHL Webhook
- **Fires**: When payment processed
- **Parameters**:
  - transaction_id (payment ID)
  - booking_id
  - contact_id
  - amount
  - currency (USD)
  - payment_method
  - payment_status (completed)
- **Purpose**: Track revenue

### booking_cancelled
- **Category**: Conversion Loss
- **Source**: GHL Webhook
- **Fires**: When booking cancelled
- **Parameters**:
  - transaction_id (booking ID)
  - contact_id
  - cancellation_reason
  - booking_date
  - cancelled_date
- **Purpose**: Track booking cancellations

---

## Event Summary by Type

### Engagement Events (Client-Side)
- page_view
- session_start
- nav_menu_click
- smooth_scroll
- book_now_button_click
- booking_widget_view
- booking_widget_focus
- section_view
- portfolio_image_view
- scroll_depth
- time_on_page
- external_link_click
- user_engagement

### Error Events (Client-Side)
- exception
- booking_error

### Conversion Events (Server-Side from GHL)
- contact_created
- appointment_scheduled
- booking_created ⭐ PRIMARY
- payment_received
- booking_cancelled

---

## How to Add Custom Events

To add a custom event, use the tracking function in JavaScript:

```javascript
// Send custom event to GA4
window.edonahairTracking.sendCustomEvent('event_name', {
  'event_category': 'category_name',
  'custom_param_1': 'value1',
  'custom_param_2': 'value2'
});
```

Example:
```javascript
window.edonahairTracking.sendCustomEvent('consultation_requested', {
  'event_category': 'booking',
  'consultation_type': 'hair_treatment'
});
```

---

## Measurement ID

**Google Analytics 4**: `G-HK9RZRN4Y2`

All events are sent to this property.

---

## Related Files

- `TRACKING_SETUP.md` - Setup guide
- `GTM_CONFIGURATION.md` - GTM instructions  
- `WEBHOOK_SETUP.md` - GHL webhook configuration
