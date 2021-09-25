from datetime import timezone, datetime

from django.db import models

class CarTrip(models.Model):
    driver_name = models.CharField(max_length=200)
    destination = models.CharField(max_length=200)
    trip_date = models.DateTimeField('trip date')
    pub_date = models.DateTimeField('date published')

    def was_published_recently(self):
        return self.pub_date >= timezone.now() - datetime.timedelta(days=1)

