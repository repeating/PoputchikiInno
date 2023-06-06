import json
from django.test import TestCase
from .models import Profile


class TestUserSignIn(TestCase):
    def setUp(self):
        """
        Set up a user profile for testing.
        """

        user = Profile(username="test_user")
        user.set_password("password")
        user.save()

    def test_sign_in_200(self):
        """
        Test successful sign in with valid username and password.
        """

        request_body = {
            "username": "test_user",
            "password": "password",
        }
        resp = self.client.post("/user/login/",
                                data=json.dumps(request_body),
                                content_type="application/json")
        self.assertEqual(resp.status_code, 200)

    def test_sign_in_400(self):
        """
        Test sign in with invalid username and password.
        """

        request_body = {
            "username": "test",
            "password": "1234",
        }
        resp = self.client.post("/user/login/",
                                data=json.dumps(request_body),
                                content_type="application/json")
        self.assertEqual(resp.status_code, 400)

    def test_sign_in_405_get_method(self):
        """
        Test sign in using GET method.
        """

        resp = self.client.get("/user/login/")
        self.assertEqual(resp.status_code, 405)

    def test_sign_in_405_delete_method(self):
        """
        Test sign in using DELETE method.
        """

        resp = self.client.delete("/user/login/")
        self.assertEqual(resp.status_code, 405)

    def test_sign_in_405_patch_method(self):
        """
        Test sign in using PATCH method.
        """

        resp = self.client.patch("/user/login/")
        self.assertEqual(resp.status_code, 405)

    def test_sign_in_missing_required_fields(self):
        """
        Test sign in with missing required fields.
        """

        request_body = {
            "username": "test_user",
        }
        resp = self.client.post("/user/login/",
                                data=json.dumps(request_body),
                                content_type="application/json")
        self.assertEqual(resp.status_code, 400)


from django.test import TestCase

# Create your tests here.
