import datetime

from django.test import TestCase
from django.utils import timezone

from.models import CarTrip , Relation
from django.utils.timezone import now
class CarTripModelTests(TestCase):

    def test_was_published_recently_with_future_cartrips(self):
        time = now() + datetime.timedelta(days=30)
        future_cartrip = CarTrip(pub_date=time)
        self.assertIs(future_cartrip.was_published_recently(),False)







