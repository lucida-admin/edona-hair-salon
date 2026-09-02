# Google Tag Manager (GTM) Configuration Guide

Container ID: **GTM-N7R44NGS**

---

## Access GTM

1. Go to: https://tagmanager.google.com/
2. Sign in with Google account
3. Select Container: **GTM-N7R44NGS**
4. Click "Workspace"

---

## GTM Setup Checklist

### Required Tags

#### 1. GA4 Configuration Tag
**Purpose**: Send all events to Google Analytics 4

**Steps**:
1. Click "New Tag"
2. Name: "GA4 - Configuration"
3. Tag Configuration:
   - Tag Type: Google Analytics: GA4 Configuration
   - Measurement ID: `G-HK9RZRN4Y2`
4. Trigger: Initialization
5. Save and Deploy

#### 2. GA4 - Page View (Optional)
**Purpose**: Track page views via GTM

**Steps**:
1. Click "New Tag"
2. Name: "GA4 - Page View"
3. Tag Configuration:
   - Tag Type: Google Analytics: GA4 Event
   - Configuration ID: [Select your GA4 config tag]
   - Event Name: `page_view`
4. Trigger: All Pages
5. Save and Deploy

---

## Recommended Tag Setup

### Event Tracking Tags

Create tags for important events:

#### Booking Intent Tag
```
Name: GA4 - Booking Intent
Type: GA4 Event
Event Name: booking_intent
Trigger: Custom Event "booking_intent"
```

#### Booking Conversion Tag
```
Name: GA4 - Booking Conversion
Type: GA4 Event
Event Name: booking_created
Trigger: Custom Event "booking_created"
```

---

## Triggers Setup

### Recommended Triggers

#### 1. Initialization Trigger
```
Name: Initialization
Type: Initialization
This Trigger Fires On: All events
```

#### 2. Page View Trigger
```
Name: All Pages
Type: Page View
This Trigger Fires On: All page views
```

#### 3. Custom Event Trigger
```
Name: booking_created Event
Type: Custom Event
Event Name: booking_created
This Trigger Fires On: booking_created event
```

---

## Variables Setup

### Recommended Variables

#### 1. GA4 Configuration ID
```
Name: GA4 - Measurement ID
Type: Constant
Value: G-HK9RZRN4Y2
```

#### 2. Event Category Variable
```
Name: Event Category
Type: Data Layer Variable
Variable Name: event_category
```

#### 3. Event Label Variable
```
Name: Event Label
Type: Data Layer Variable
Variable Name: event_label
```

---

## Testing & Preview

### Test Before Publishing

1. Click "Preview" button in top right
2. Browse website
3. Monitor GTM Preview panel
4. Verify tags firing correctly

### Common Issues

**Tags not firing?**
- Check trigger configuration
- Verify tag is enabled
- Ensure trigger matches event

**No data in GA4?**
- Verify GA4 Configuration tag exists
- Check Measurement ID correct
- Ensure tag is deployed

---

## Deployment

### Deploy Changes

1. Click "Submit" button
2. Add Version Name: "v1.0 - GA4 Setup"
3. Add Version Description: "Initial GA4 configuration"
4. Click "Publish"

### Publishing Best Practices

- Always preview before publishing
- Create descriptive version names
- Keep deployment history
- Test in preview mode first

---

## GTM Benefits for edonahair

✅ **No-Code Updates**: Update tags without touching website code

✅ **Event Management**: Create/modify events without developers

✅ **Conversion Tracking**: Set up conversions in GTM

✅ **Audience Creation**: Create audiences for remarketing

✅ **A/B Testing**: Set up A/B tests via GTM

✅ **Custom Events**: Fire events based on user behavior

✅ **Cross-Domain Tracking**: Track users across domains

---

## Advanced GTM Features

### Audience Triggers
Trigger tags based on user audiences:
1. Create audience in GA4
2. Set up trigger in GTM
3. Fire tags for specific audiences

### Data Layer Events
Push custom data to data layer:
```javascript
// Example in website code
dataLayer.push({
  'event': 'booking_completed',
  'bookingValue': 150.00,
  'bookingService': 'precision_cut'
});
```

### Dynamic Remarketing
Set up remarketing tags:
1. Create remarketing audience
2. Add remarketing tag
3. Target ads to past visitors

---

## Monitoring

### Check Tag Performance
1. Go to GTM Dashboard
2. Click "Reports"
3. Monitor tag firing rates
4. Check event counts

### GA4 Data Validation
1. Go to Google Analytics
2. Click "Real-time"
3. Verify events appearing
4. Check event parameters

---

## Common Configurations

### Setup #1: Basic GA4 + Events
- GA4 Configuration tag
- GA4 Event tags for key events
- Deployment

### Setup #2: With Conversions
- GA4 Configuration tag
- GA4 Event tags
- Conversion tracking tags
- Conversion triggers

### Setup #3: Advanced (Recommended)
- GA4 Configuration
- Event tags
- Conversion tracking
- Audience triggers
- Remarketing setup
- Custom events

---

## Troubleshooting

| Issue | Solution |
|-------|----------|
| Tags not firing | Check trigger configuration |
| No GA4 data | Verify GA4 Configuration tag deployed |
| Events missing parameters | Check data layer variables |
| Preview shows nothing | Ensure GTM code on website |
| Conversions not tracking | Verify conversion event name exact match |

---

## Support

- GTM Help: https://support.google.com/tagmanager
- GA4 Help: https://support.google.com/analytics
- GTM Community: Stack Overflow (tag: google-tag-manager)

---

## Related Files

- `TRACKING_SETUP.md` - Setup overview
- `GA4_EVENTS_REFERENCE.md` - All tracked events
- `WEBHOOK_SETUP.md` - GHL webhook setup
