import React from "react";
import { List, ListItem, ListItemPrefix } from "@material-tailwind/react";
import {
  CalendarDaysIcon,
  IdentificationIcon,
  VideoCameraIcon,
  PhotoIcon,
} from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

const SideNav = () => {
  return (
    <div className="">
      <List className="grid grid-cols-3 md:grid-cols-1">
        <Link to="/dashboard/addMediaBuzzVideos">
          <ListItem>
            <ListItemPrefix>
              <VideoCameraIcon className="h-5 w-5" />
            </ListItemPrefix>
            Add Media Buzz Video
          </ListItem>
        </Link>
        <Link to="/dashboard/addMediaBuzzPhotos">
          <ListItem>
            <ListItemPrefix>
              <PhotoIcon className="h-5 w-5" />
            </ListItemPrefix>
            Add Media Buzz Photo
          </ListItem>
        </Link>
        <Link to="/dashboard/addMediaBuzzInfo">
          <ListItem>
            <ListItemPrefix>
              <IdentificationIcon className="h-5 w-5" />
            </ListItemPrefix>
            Add Media Buzz Others Info
          </ListItem>
        </Link>
        <Link to="/dashboard/addEvent">
          <ListItem>
            <ListItemPrefix>
              <CalendarDaysIcon className="h-5 w-5" />
            </ListItemPrefix>
            Add Event
          </ListItem>
        </Link>
        <Link to="/dashboard/showreel">
          <ListItem>
            <ListItemPrefix>
              <VideoCameraIcon className="h-5 w-5" />
            </ListItemPrefix>
            Add Showreel
          </ListItem>
        </Link>
        <Link>
          <ListItem>
            <ListItemPrefix>
              <IdentificationIcon className="h-5 w-5" />
            </ListItemPrefix>
            Add Others
          </ListItem>
        </Link>
      </List>
    </div>
  );
};

export default SideNav;
