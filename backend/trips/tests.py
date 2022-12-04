import datetime

from django.test import TestCase, override_settings
from django.utils.timezone import now

from .models import CarTrip

testing_middleware = []


class CarTripModelTests(TestCase):
    def test_was_published_recently_with_future_cartrips(self):
        time = now() + datetime.timedelta(days=30)
        future_cartrip = CarTrip(pub_date=time)
        self.assertIs(future_cartrip.was_published_recently(), False)


class TestCarCreation(TestCase):
    @override_settings(MIDDLEWARE=testing_middleware)
    def test_car_creation_404(self, *args, **kwargs):
        # no csrf error will occur
        resp = self.client.post("/trips", data={})
        self.assertEqual(resp.status_code, 404)

    @override_settings(MIDDLEWARE=testing_middleware)
    def test_car_creation_200(self, *args, **kwargs):
        # no csrf error will occur
        resp = self.client.post(
            "/trips/",
            data={
                "driver_name": "test",
                "destination": "test",
                "number_of_seats": 1,
                "trip_date": datetime.datetime(2020, 1, 1),
            },
        )
        self.assertEqual(resp.status_code, 200)
