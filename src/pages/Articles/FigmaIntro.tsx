import React, { useEffect } from "react";
import { animateScroll as scroll } from "react-scroll";
import { Link } from "react-router-dom";
import figma1 from "./images/f-intro-1.png";
import figma2 from "./images/f-intro-2.png";
import figma3 from "./images/f-intro-3.png";
import figma4 from "./images/f-intro-4.png";
import figma5 from "./images/f-intro-5.png";
import figma6 from "./images/f-intro-6.png";
import figma7 from "./images/f-intro-7.png";

import "./style.css";
import { useDash } from "../../contexts/DashContext";

const FigmaIntro = (): React.JSX.Element => {
  let [category, duration] = ["TECH INNOVATION", "2mins"];
  let { updateDashStatus } = useDash();
  useEffect(() => {
    updateDashStatus(false);
    // Scroll to top when the component mounts
    scroll.scrollToTop({
      duration: 1000, // duration of the scrolling animation in milliseconds
      smooth: "easeInOutQuart", // the type of easing
    });
  }, []);
  return (
    <section className="main-spacing-x">
      <div className="py-4" />
      <div className="article-contents-main px-0 px-sm-2 px-md-4 px-lg-5">
        <div className="container-fluid no-space">
          <div className="row no-space">
            <div className="w-max-content no-space">
              <p className="royal text-semibold">{category}</p>
            </div>
            <div className="col"></div>
            <div className="w-max-content no-space">
              <p className="text-semibold royal-shade-5">{duration} Read</p>
            </div>
          </div>
        </div>
        <div className="py-2" />
        <h1 className="text-bold font-family-quicksand royal-shade-5">
          Introduction to Visual Design (I) - Design Elements
        </h1>
      </div>
      <div className="article-contents-main px-0 px-sm-2 px-md-4 px-lg-5">
        <div className="py-3" />
        <div>
          <h4 className="font-family-quicksand gray-2 text-semibold">
            What is Figma?
          </h4>
          <p className="py-2 text-medium gray-4">
            Figma is a powerful web-based design tool primarily used for UI/UX
            design, prototyping, and vector graphics. Unlike traditional design
            software that requires installation, Figma operates directly in a
            web browser, making it accessible from any device with an internet
            connection. This cloud-based nature allows Figma to handle complex
            design processes while storing files securely online. With real-time
            collaboration, designers, developers, and stakeholders can work
            together on the same design file, simplifying communication and
            speeding up the design process.
          </p>
          <div className="py-3" />
          <div className="container-fluid no-space">
            <div className="row g-3 align-items-center justify-content-center">
              <div className="co1">
                <img src={figma1} />
              </div>
            </div>
          </div>
          <div className="py-3" />
          <h6 className="font-family-quicksand gray-2 text-semibold">
            Why Use Figma?
          </h6>

          <ul className="text-p text-medium gray-4">
            <li>
              <span className="text-semibold"></span>Cloud-Based Collaboration
            </li>
            <li>
              <span className="text-semibold"></span>Cross-Platform
              Accessibility
            </li>
            <li>
              <span className="text-semibold"></span>Prototyping and Design
              Workflow
            </li>
            <li>
              <span className="text-semibold"></span>Version Control and File
              Management
            </li>
            <li>
              <span className="text-semibold"></span>Community and Resources
            </li>
          </ul>
          <div className="py-3" />

          <div className="container-fluid no-space">
            <div className="row g-3 align-items-center justify-content-center">
              <div className="co1">
                <img src={figma2} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="article-contents-main  gray-2  px-0 px-sm-2 px-md-4 px-lg-5">
        <div className="py-3" />
        <div>
          <h4 className="font-family-quicksand gray-2 text-semibold">
            Getting Started
          </h4>
          <h6 className="font-family-quicksand gray-2 text-semibold">
            Setting Up A Figma Account.
          </h6>

          <p className="py-2 text-medium gray-4">
            To start with Figma, visit{" "}
            <Link to={"https://figma.com"} target="_blank">
              figma.com
            </Link>{" "}
            and create an account by entering your email and creating a
            password, or by linking your Google account. Once registered, log in
            to access your dashboard, where you can create and manage design
            projects.
          </p>
          <div className="py-3" />

          <div className="container-fluid no-space">
            <div className="row g-3 align-items-center justify-content-center">
              <div className="co1">
                <img src={figma3} />
              </div>
            </div>
          </div>
          <div className="py-3" />
          <h6 className="font-family-quicksand gray-2 text-semibold">
            The Figma Interface
          </h6>
          <dl>
            <dt className="text-semibold">The Dashboard</dt>
            <dd className="text-p text-medium">
              The dashboard is your home screen in Figma, showing your recent
              projects, team workspaces, and community resources. From here, you
              can open new files, start templates, and join or create teams.
            </dd>

            <div className="py-3" />

            <div className="container-fluid no-space">
              <div className="row g-3 align-items-center justify-content-center">
                <div className="co1">
                  <img src={figma4} />
                </div>
              </div>
            </div>
            <div className="py-3" />
            <dt className="text-semibold"> The Toolbar</dt>
            <dd className="text-p text-medium">
              Located at the bottom, the toolbar contains essential design tools
              like the Shape, Frame, Pen, and Text tools, as well as prototyping
              options and export settings.
            </dd>

            <dt className="text-semibold">The Layer Panel</dt>
            <dd className="text-p text-medium">
              On the left, the Layers panel displays a hierarchy of all frames,
              groups, and elements within a design. It helps manage and organize
              your design elements.
            </dd>

            <dt className="text-semibold">Canvas</dt>
            <dd className="text-p text-medium">
              The main workspace where you create and arrange your designs. The
              canvas supports infinite scaling, so you can design for various
              screen sizes and layouts.
            </dd>

            <dt className="text-semibold">Properties Panel</dt>
            <dd className="text-p text-medium">
              On the right, the Properties panel allows you to modify selected
              elements, including adjustments to color, size, positioning,
              effects, and text styles.
            </dd>
          </dl>

          <div className="py-3" />

          <div className="container-fluid no-space">
            <div className="row g-3 align-items-center justify-content-center">
              <div className="co1">
                <img src={figma5} />
              </div>
            </div>
          </div>
          <div className="py-3" />

          <p className="py-2 text-medium gray-4"></p>

          <h6 className="font-family-quicksand gray-2 text-semibold">
            Navigating the canvas
          </h6>
          <dl>
            <dt className="text-semibold">Zooming and Panning</dt>
            <dd className="text-p text-medium">
              Use your mouse wheel or pinch gestures on a trackpad to zoom in
              and out. For panning, hold the space bar and click-drag to move
              around the canvas, allowing you to focus on specific parts of your
              design.
            </dd>

            <dt className="text-semibold">Basic Controls</dt>
            <dd className="text-p text-medium">
              Figma also includes shortcuts for quick navigation. For instance,
              pressing Shift + 1 fits the entire design within view, while Shift
              + 2 focuses on a specific selection. These controls help
              efficiently maneuver around complex designs. For more shortcuts to
              and controls to ease your design, you can use the ctrl+shift+?
              command. This would give you all the list of controls available
              for you to use.
            </dd>
          </dl>
        </div>
      </div>
      <div className="article-contents-main  gray-2  px-0 px-sm-2 px-md-4 px-lg-5">
        <div className="py-3" />
        <div>
          <h4 className="font-family-quicksand gray-2 text-semibold">
            Basic Tools and Functions
          </h4>
          <p className="py-2 text-medium gray-4">
            In Figma, frames serve as your artboards, helping you organize and
            design for specific screen sizes, like mobile, tablet, or desktop.
            To create a frame, select the Frame tool (shortcut: F) and choose a
            preset size or custom dimensions. You can create multiple frames to
            design various screens within the same file, which is helpful for
            organizing layouts and flows.
          </p>
          <p className="py-2 text-medium gray-4">
            Frames can be nested, duplicated, and aligned, making it easy to
            keep your design organized, especially when working on multi-screen
            projects.
          </p>
          <p className="py-2 text-medium gray-4"></p>
          <p className="py-2 text-medium gray-4"></p>
          <h6 className="font-family-quicksand gray-2 text-semibold">
            Shapes and Lines
          </h6>
          <p className="py-2 text-medium gray-4">
            Figma’s Shape tool (shortcut: R for rectangle, O for ellipse) allows
            you to create basic shapes such as rectangles, ellipses, lines, and
            polygons. These shapes are foundational elements that can be used
            for buttons, backgrounds, icons, and more.
          </p>

          <div className="py-3" />

          <div className="container-fluid no-space">
            <div className="row g-3 align-items-center justify-content-center">
              <div className="co1">
                <img src={figma6} />
              </div>
            </div>
          </div>
          <div className="py-3" />
          <h6 className="font-family-quicksand gray-2 text-semibold">
            Pen Tool and Bezier Curves
          </h6>
          <dl>
            <dt className="text-semibold">Pen Tool</dt>
            <dd className="text-p text-medium">
              Figma’s Pen tool (shortcut: P) allows you to create custom paths,
              essential for icons, logos, and illustrations. With the Pen tool,
              you can click to create points connected by straight lines or drag
              to create curves.
            </dd>

            <dt className="text-semibold">Bezier Curves</dt>
            <dd className="text-p text-medium">
              By adjusting handles on each point, you can control the direction
              and curvature of lines to create smooth and complex shapes. This
              is particularly useful for creating organic and intricate shapes.
            </dd>
          </dl>
          <h6 className="font-family-quicksand gray-2 text-semibold">
            Text Tool
          </h6>
          <dl>
            <dt className="text-semibold">Adding Text</dt>
            <dd className="text-p text-medium">
              Figma’s Text tool (shortcut: T) enables you to add and edit text,
              which is essential for designing interfaces with labels, headers,
              buttons, and body content.
            </dd>

            <dt className="text-semibold">Font Selection and Adjustment</dt>
            <dd className="text-p text-medium">
              You can choose from Figma’s integrated Google Fonts or upload
              custom fonts, with options to adjust font size, weight, line
              height, and letter spacing.
            </dd>
            <dt className="text-semibold">Alignment</dt>
            <dd className="text-p text-medium">
              Text elements can be aligned within frames or relative to other
              design elements, and Figma’s alignment tools help keep text
              consistently spaced and visually balanced.
            </dd>
          </dl>
        </div>
      </div>
      <div className="article-contents-main  gray-2  px-0 px-sm-2 px-md-4 px-lg-5">
        <div className="py-3" />
        <div>
          <h4 className="font-family-quicksand gray-2 text-semibold">
            Working with Colors and Styles
          </h4>
          <h6 className="font-family-quicksand gray-2 text-semibold">
            Color Picker and Fill Options
          </h6>

          <dl>
            <dt className="text-semibold">Using the Color Picker</dt>
            <dd className="text-p text-medium">
              Figma’s color picker lets you select colors from the palette,
              enter HEX/RGB values, or sample colors directly from the canvas
              with the eyedropper tool. This tool is essential for maintaining
              brand consistency and creating cohesive color schemes across your
              designs.
            </dd>
            <dt className="text-semibold">Gradients and Fills</dt>
            <dd className="text-p text-medium">
              Figma supports linear, radial, and angular gradients, along with
              solid fills. You can customize each gradient stop for smooth
              transitions and apply multiple fills to a single layer for complex
              effects. These fill options are especially useful for creating
              depth and emphasis within your designs.
            </dd>
          </dl>

          <div className="py-3" />

          <div className="container-fluid no-space">
            <div className="row g-3 align-items-center justify-content-center">
              <div className="co1">
                <img src={figma7} />
              </div>
            </div>
          </div>
          <div className="py-3" />
          <h6 className="font-family-quicksand gray-2 text-semibold">
            Creating Styles
          </h6>

          <dl>
            <dt className="text-semibold">Setting Up Color Styles</dt>
            <dd className="text-p text-medium">
              Color styles are reusable color settings that ensure consistency
              across your project. Once created, these styles can be applied to
              any layer, making it easy to update the design universally if the
              brand colors change.
            </dd>
            <dt className="text-semibold">Text Styles</dt>
            <dd className="text-p text-medium">
              You can also create and save text styles with specific fonts,
              sizes, and weights, which helps maintain a consistent typography
              hierarchy. Both color and text styles speed up the design process
              and make updating elements across multiple frames or pages
              effortless.
            </dd>
          </dl>
        </div>
      </div>
      <div className="article-contents-main  gray-2  px-0 px-sm-2 px-md-4 px-lg-5">
        <div className="py-3" />
        <div>
          <h4 className="font-family-quicksand gray-2 text-semibold">
            Layer Management
          </h4>
          <p className="py-2 text-medium gray-4">
            A layer is an individual element or component in a design. Each
            shape, image, text, or grouping acts as its own layer, stacked in a
            hierarchy within a design file. Layers are the building blocks of a
            composition, allowing designers to manage, edit, and arrange each
            piece of content independently or in groups without affecting other
            elements. For example: In a UI layout, the background, buttons,
            images, and text might all be separate layers. Layers can be ordered
            on top of one another, with those at the top appearing in front
            visually, which helps create depth and structure.
          </p>
          <h6 className="font-family-quicksand gray-2 text-semibold">
            Organizing Layers
          </h6>

          <dl>
            <dt className="text-semibold">Grouping and Arranging</dt>
            <dd className="text-p text-medium">
              To keep your project organized, Figma allows you to group layers
              (shortcut: Cmd/Ctrl + G), making it easier to manage multiple
              elements as a single unit. Additionally, arranging layers by
              moving them up or down helps structure your design’s layout,
              especially when elements overlap.
            </dd>
            <dt className="text-semibold">Labeling Layers</dt>
            <dd className="text-p text-medium">
              Naming your layers descriptively improves project navigation,
              particularly when collaborating with others or revisiting your
              project after time. Clear labels can also speed up alignment and
              selection of specific elements.
            </dd>
          </dl>

          <h6 className="font-family-quicksand gray-2 text-semibold">
            Layer Visibility and Locking
          </h6>

          <dl>
            <dt className="text-semibold">Managing Visibility</dt>
            <dd className="text-p text-medium">
              Layers can be toggled visible or hidden, which is useful for
              trying out different layout options without deleting elements.
              This feature is helpful during prototyping or when testing
              different visual treatments.
            </dd>
            <dt className="text-semibold">Locking Layers</dt>
            <dd className="text-p text-medium">
              Locking layers prevents accidental edits to essential elements,
              which is especially useful when you’re working on top of a complex
              background or interface grid. Locked layers remain visible but
              can’t be moved or edited, ensuring a stable workspace.
            </dd>
          </dl>
        </div>
      </div>

      <div className="article-contents-main  gray-2  px-0 px-sm-2 px-md-4 px-lg-5">
        <div className="py-3" />
        <div>
          <h4 className="font-family-quicksand gray-2 text-semibold">
            Components and Reusability
          </h4>
          <h6 className="font-family-quicksand gray-2 text-semibold">
            Creating Components
          </h6>
          <p className="py-2 text-medium gray-4">
            In Figma, components are design elements that can be reused across
            different screens and layouts. To create a component, you can select
            any design element (like a button or icon) and choose "Create
            Component" (shortcut: Cmd/Ctrl + Alt + K). This feature helps
            maintain consistency and saves time, as changes made to the main
            component (master) update all instances of it.
          </p>
          <h6 className="font-family-quicksand gray-2 text-semibold">
            Using and Updating Components
          </h6>
          <p className="py-2 text-medium gray-4">
            Components can be dragged from the "Assets" panel into any frame,
            allowing you to use them repeatedly throughout the design.
          </p>
          <p className="py-2 text-medium gray-4">
            When you edit the master component, all instances automatically
            reflect those changes. You can override specific properties in each
            instance (like text or colors) for flexibility while retaining
            consistency.
          </p>

          <dl>
            <dt className="text-semibold">Grouping and Arranging</dt>
            <dd className="text-p text-medium">
              To keep your project organized, Figma allows you to group layers
              (shortcut: Cmd/Ctrl + G), making it easier to manage multiple
              elements as a single unit. Additionally, arranging layers by
              moving them up or down helps structure your design’s layout,
              especially when elements overlap.
            </dd>
            <dt className="text-semibold">Labeling Layers</dt>
            <dd className="text-p text-medium">
              Naming your layers descriptively improves project navigation,
              particularly when collaborating with others or revisiting your
              project after time. Clear labels can also speed up alignment and
              selection of specific elements.
            </dd>
          </dl>

          <h6 className="font-family-quicksand gray-2 text-semibold">
            Layer Visibility and Locking
          </h6>

          <dl>
            <dt className="text-semibold">Managing Visibility</dt>
            <dd className="text-p text-medium">
              Layers can be toggled visible or hidden, which is useful for
              trying out different layout options without deleting elements.
              This feature is helpful during prototyping or when testing
              different visual treatments.
            </dd>
            <dt className="text-semibold">Locking Layers</dt>
            <dd className="text-p text-medium">
              Locking layers prevents accidental edits to essential elements,
              which is especially useful when you’re working on top of a complex
              background or interface grid. Locked layers remain visible but
              can’t be moved or edited, ensuring a stable workspace.
            </dd>
          </dl>
        </div>
      </div>
      <div className="article-contents-main  gray-2  px-0 px-sm-2 px-md-4 px-lg-5">
        <div className="py-3" />
        <div>
          <h4 className="font-family-quicksand gray-2 text-semibold">
            Exporting Designs
          </h4>
          <h6 className="font-family-quicksand gray-2 text-semibold">
            Exporting Assets
          </h6>
          <p className="py-2 text-medium gray-4">
            Exporting Frames, Layers, and Assets: Figma allows you to export
            individual layers, frames, or selected elements in various formats,
            including PNG, SVG, and PDF. This is useful for sharing assets with
            developers or clients. Select the item and use the “Export” option
            to choose your format and scale.
          </p>
          <h6 className="font-family-quicksand gray-2 text-semibold">
            Export Settings
          </h6>
          <p className="py-2 text-medium gray-4">
            Adjusting Quality, Resolutions, and Naming: You can customize export
            settings by adjusting resolution (e.g., for @2x or @3x for
            high-density screens) and setting quality levels for raster images.
            Naming conventions can also be defined to keep assets organized,
            which is especially helpful when working in teams or transferring
            files to developers.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FigmaIntro;
