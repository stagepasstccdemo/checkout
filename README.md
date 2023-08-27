# New MFA Application Template

# This is a base application for creating new microfrontends based on the stagepass application arch

---

## But first… In order to get the template running we need to make a few adjustments here and there

we could make a cli ? we could… but I'm not doing it right know so… feel free to make it if you feel like it

---

**.github/workflows/ci-pipeline.yml**

→ Here we need to make a feel adjustments in order to get the pipeline running such as set these tokens

- secrets.GH_TOKEN
- secrets.AWS_ACCESS_KEY_ID
- secrets.AWS_SECRET_ACCESS_KEY
- secrets.AWS_REGION

When it's done, just uncomment the pipeline workflow and you're ready to go….

---

**src/orgname-app-name.tsx**

→ In the src folder we have a orgname-app-name.tsx , the first thing we need to do is rename with the microfrontend name that we want it to be (eg: stagepass-app-tickets)

→ If we want to use Sentry we also need to uncomment the lines in this file and insert the DSN token in order to make the connection if your sentry project

More informations here:

[Data Source Name (DSN)](https://docs.sentry.io/product/sentry-basics/dsn-explainer/)

---

**deploy.sh**

→ Now we're gonna need to make a whole lot of changes, since this deployment file is responsible for making our frontend available to the core application and uploading the build to aws s3 bucket

We have a few lines that we need to change it in order to get it running such as:

- **Line 11: INSERT_YOUR_BUCKET_HERE ⇒ Your S3 Bucket name (eg: mfe-stage-pass)**
- **Line 14: app-name ⇒ your new app name (eg: app-tickets)**
- **Line 14: your-app-name.js ⇒ (eg: stagepass-app-tickets)**
- **Line 17: @orgname/app-name ⇒ (eg: @stagepass/app-tickets)**
- **Line 20: Also need to change the INSERT_YOUR_BUCKET_HERE and the app-name**
- **Line 21: Also need to change the INSERT_YOUR_BUCKET_HERE**
- **Line 22: CLOUDFRONT-DIST-ID ⇒ place your cloudfront dist id (ex: IE5123MASF)**

---

**package.json**

→ Now we need to need to find the key "types” in the package.json (just filter and you'll get there) 

- When you do change the dist/orgname-app-name.d.ts to your respective values such as (eg: stagepass-app-tickets.d.ts)

---

**tsconfig.json**

→ We need to change the files property and make it so (eg: src/stagepass-app-tickets.tsx)

---

**webpack.config.js**

→ At the defaultConfig we need to change the orgName and projectName , at this point you know how it goes right ?

At least… you'll see some commented lines in the merge/plugins object, the first plugin helps you to allow you to use serviceWorkers in your application and the second one is for making the public folder available in the final build directory (this helps making the manifest.json available) in order to make your website a PWA Application 

<aside>
⚠️ Keep in mind that you can only do that if you're using this as a standalone application, if you using it as a mfe application the serviceWorkers needs to be setup in the core application and not here.

</aside>

## That's it… you're ready to go and make anything you want, from now on it's just another react application

If you need to learn more about some concepts or the structure about the code feel free to go to these docs: 

[React](https://react.dev/)

[Getting Started with single-spa | single-spa](https://single-spa.js.org/docs/getting-started-overview)

[webpack](https://webpack.js.org/)