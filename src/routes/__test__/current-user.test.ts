import request from "supertest";
import { app } from "../../app";
import { appendFile } from "fs";

it("Responds with details about the current user", async () => {
  const cookie = await getCookie();

  const response = await request(app)
    .get("/api/users/currentuser")
    .set("Cookie", cookie as string[])
    .expect(200);

  expect(response.body.currentUser.email).toEqual("test@test.com");
});

it("Responds with 401 if not authenticated", async () => {
  const response = await request(app)
    .get("/api/users/currentuser")
    .send()
    .expect(401);

  expect(response.body.errors[0].message).toEqual("Not authorized");
});
