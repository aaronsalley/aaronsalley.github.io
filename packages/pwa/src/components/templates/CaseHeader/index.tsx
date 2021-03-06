import React, { useState, useEffect } from "react";
import Image, { ImageProps } from "next/image";
import { RootState, useAppSelector } from "../../../../data/viewModel/store";
import { toString } from "../../../../data/models/featuredImages";
import ProjectHeader from "../../organisms/ProjectHeader";
import { Platform } from "../../../../data/models/platforms";
import { Device } from "../../../../data/models/devices";
import { capitalizeFirstLetter } from "../../../../utils";

import style from "./index.module.scss";

const CaseHeader = ({
  ...project
}: React.ComponentProps<any>): React.ReactElement => {
  const theme = useAppSelector((state: RootState) => state.colorScheme);

  /**
   * Creates the list of platforms for which the
   * project is available.
   *
   * @returns ReactElement
   */
  const AvailableFor = (): React.ReactElement => {
    let platforms: React.ReactElement[] = [];

    for (const [platform, value] of Object.entries(project.platforms)) {
      platforms.push(
        <li
          className={style[value ? "available" : "unavailable"]}
          key={platform}
        >
          <i
            className={Platform[platform as keyof typeof Platform]}
            aria-hidden
            title={capitalizeFirstLetter(platform)}
          />
        </li>
      );
    }

    return (
      <div className={style["platforms"]}>
        <label htmlFor={"platforms"}>Avaliable for:</label>
        <ul>{platforms}</ul>
      </div>
    );
  };

  /**
   * Creates the section that describes facts
   * about the project.
   */
  const Facts = ({
    title,
    value,
  }: React.ComponentProps<any>): React.ReactElement => {
    if (Array.isArray(value)) {
      value = value.map((item: any) => {
        return <li key={item}>{item}</li>;
      });
      value = <ul>{value}</ul>;
    } else {
      value = <p>{value}</p>;
    }

    return (
      <aside className={style["fact"]}>
        <h3>{title}</h3>
        {value}
      </aside>
    );
  };

  /**
   * State storage for device display.
   */
  const [device, setDevice] = useState(project.device);

  /**
   * Creates the list of devices for which the
   * project has images.
   *
   * @returns ReactElement
   */
  const Devices = ({
    images = toString(project.images[theme]),
  }): React.ReactElement => {
    let devices: React.ReactElement[] = [];

    for (const [device, image] of Object.entries(images)) {
      let icon, title, style;

      switch (device) {
        case Device.MacbookPro:
          icon = "fas fa-laptop";
          title = "Laptop";
          break;
        case Device.iMac:
          icon = "fas fa-desktop";
          title = "Desktop";
          break;
        case Device.iPhone:
          icon = "fas fa-mobile-alt";
          title = "Mobile";
          break;
        case Device.iPhones:
          icon = "fas fa-mobile-alt";
          title = "Mobile (multiple)";
          break;
        case Device.iPad.landscape:
          icon = "fas fa-tablet-alt";
          title = "Tablet (landscape)";
          style = { transform: "rotate(90deg)" };
          break;
        case Device.iPad.portrait:
          icon = "fas fa-tablet-alt";
          title = "Tablet (portrait)";
          break;
      }

      if (image) {
        devices.push(
          <li key={device}>
            <button onClick={() => setDevice(device)} value={device as string}>
              <i
                className={icon}
                style={style}
                aria-hidden
                title={`View on ${device.replace(".", " in ")}`}
              />
            </button>
          </li>
        );
      }
    }

    return <ul className={style["devices"]}>{devices}</ul>;
  };

  /**
   * Creates the project image display.
   *
   * @returns ReactElement
   */
  const DeviceImage = ({
    images = toString(project.images[theme]),
  }: any): React.ReactElement | null => {
    const [image, setImage] = useState(images[device]);

    useEffect(() => {
      setImage(images[device]);
    }, [images]);

    try {
      return image ? (
        <div className={style["deviceImage"]}>
          <img
            src={image}
            alt={`${project.client} on ${device.replace(
              /\.(\w+)/,
              " in $1 mode"
            )}`}
            loading={"eager"}
            // placeholder={"blur"}
            // blurDataURL={`${image}?lqip`}
            // layout={"fill"}
            // priority
          />
        </div>
      ) : null;
    } catch (error) {}

    return null;
  };

  return (
    <React.Fragment>
      <ProjectHeader {...project} context={"case"} />
      <AvailableFor />
      <Devices />
      <DeviceImage />
      <div className={style["facts"]}>
        <Facts title={"Role"} value={project.roles} />
        <Facts title={"Timeframe"} value={project.date} />
        <Facts title={"Tools"} value={project.tools} />
      </div>
    </React.Fragment>
  );
};

export default CaseHeader;
