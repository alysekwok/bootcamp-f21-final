import mongoDB from "../index"
import Application from "../models/Application"
import Cat from "../models/Cat"

export async function getApplications() { //get all the applications
  await mongoDB();
  const applications = await Application.find({});
  if (applications == null) {
    throw new Error("There is no application");
  } else {
    return applications;
  }
}

export async function findApplication(id) { //find application with the cat id inputted
  if (!id) {
    throw new Error("There is no ID input");
  }
  await mongoDB();
  const application = await Application.find({_id: id});
  if (application == null) {
      throw new Error("There is no application with the ID inputted");
  } else {
      return application;
  }
}

export async function findApplicationofCat(catname) { //find application with the cat name inputted
  if (!catname) {
    throw new Error("There is no cat name input");
  }
  await mongoDB();
  const cat = await Cat.find({name: catname});
  const catid = cat[0]._id;
  const application = await Application.find({id: catid});
  if (application == null || application.length === 0) {
      throw new Error("There is no application with the cat name inputted");
  } else {
      return application;
  }
}

export async function submit(application) { //submit application
  await mongoDB();
  const newApp = await new Application(application);
  await newApp.save(function(err) {
    if (err) {
      throw new Error(err);
    }
  });
  return newApp;
}

export async function setApproved(id) {
  if (!id) {
    throw new Error("There is no ID input");
  }
  await mongoDB();
  const application = await Application.find({_id: id});
  if (!application) {
    throw new Error("There is no application with the ID inputted");
  } else {
    const setApp = application[0];
    const catid = setApp.id;
    const adoptCats = await Cat.find({_id: catid});
    if (!adoptCats) {
      throw new Error("There is no such cat");
    } else {
      const adoptCat = adoptCats[0];
      if (adoptCat.isAdopted === true) {
        throw new Error ("The cat has been adopted");
      } else { //update status
        setApp.isApproved = true;
        await setApp.save();
        adoptCat.isAdopted = true;
        await adoptCat.save();
        return "Application approved"
      }
    }
  }
}