"use client";

import React, { useEffect } from "react";
import { animateScroll as scroll } from "react-scroll";
import Link from "next/link";
import figma1 from "./images/f-intro-1.png";
import figma2 from "./images/f-intro-2.png";
import figma3 from "./images/f-intro-3.png";
import figma4 from "./images/f-intro-4.png";
import figma5 from "./images/f-intro-5.png";
import figma6 from "./images/f-intro-6.png";
import figma7 from "./images/f-intro-7.png";

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
    <section className="mx-auto w-full max-w-6xl px-4 sm:px-6">
      <div className="py-4" />
      <div className="mx-auto w-full max-w-3xl px-0 sm:px-2 md:px-4 lg:px-5 [&_img]:h-auto [&_img]:w-full [&_img]:rounded-xl [&_p]:leading-7 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-1.5 [&_ol]:list-decimal [&_ol]:pl-6">
        <div className="w-full">
          <div className="flex flex-wrap">
            <div className="w-max">
              <p className="text-royal font-semibold">{category}</p>
            </div>
            <div className="flex-1"></div>
            <div className="w-max">
              <p className="font-semibold text-royal-ink">{duration} Read</p>
            </div>
          </div>
        </div>
        <div className="py-2" />
        <h1 className="font-bold font-quicksand text-royal-ink text-[28px] leading-tight sm:text-[36px]">
          Introduction to Visual Design (I) - Design Elements
        </h1>
      </div>
      <div className="mx-auto w-full max-w-3xl px-0 sm:px-2 md:px-4 lg:px-5 [&_img]:h-auto [&_img]:w-full [&_img]:rounded-xl [&_p]:leading-7 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-1.5 [&_ol]:list-decimal [&_ol]:pl-6">
        <div className="py-3" />
        <div>
          <h4 className="font-quicksand text-slate-800 font-semibold text-[20px] leading-snug">
            What is Figma?
          </h4>
          <p className="py-2 font-medium text-slate-600">
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
          <div className="w-full">
            <div className="flex flex-wrap gap-4 items-center justify-center">
              <div className="flex-1">
                <img src={figma1.src} />
              </div>
            </div>
          </div>
          <div className="py-3" />
          <h6 className="font-quicksand text-slate-800 font-semibold text-[17px] leading-snug">
            Why Use Figma?
          </h6>

          <ul className="text-[15px] font-medium text-slate-600">
            <li>
              <span className="font-semibold"></span>Cloud-Based Collaboration
            </li>
            <li>
              <span className="font-semibold"></span>Cross-Platform
              Accessibility
            </li>
            <li>
              <span className="font-semibold"></span>Prototyping and Design
              Workflow
            </li>
            <li>
              <span className="font-semibold"></span>Version Control and File
              Management
            </li>
            <li>
              <span className="font-semibold"></span>Community and Resources
            </li>
          </ul>
          <div className="py-3" />

          <div className="w-full">
            <div className="flex flex-wrap gap-4 items-center justify-center">
              <div className="flex-1">
                <img src={figma2.src} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto w-full max-w-3xl px-0 sm:px-2 md:px-4 lg:px-5 [&_img]:h-auto [&_img]:w-full [&_img]:rounded-xl [&_p]:leading-7 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-1.5 [&_ol]:list-decimal [&_ol]:pl-6 text-slate-800">
        <div className="py-3" />
        <div>
          <h4 className="font-quicksand text-slate-800 font-semibold text-[20px] leading-snug">
            Getting Started
          </h4>
          <h6 className="font-quicksand text-slate-800 font-semibold text-[17px] leading-snug">
            Setting Up A Figma Account.
          </h6>

          <p className="py-2 font-medium text-slate-600">
            To start with Figma, visit{" "}
            <Link href={"https://figma.com"} target="_blank">
              figma.com
            </Link>{" "}
            and create an account by entering your email and creating a
            password, or by linking your Google account. Once registered, log in
            to access your dashboard, where you can create and manage design
            projects.
          </p>
          <div className="py-3" />

          <div className="w-full">
            <div className="flex flex-wrap gap-4 items-center justify-center">
              <div className="flex-1">
                <img src={figma3.src} />
              </div>
            </div>
          </div>
          <div className="py-3" />
          <h6 className="font-quicksand text-slate-800 font-semibold text-[17px] leading-snug">
            The Figma Interface
          </h6>
          <dl>
            <dt className="font-semibold">The Dashboard</dt>
            <dd className="text-[15px] font-medium">
              The dashboard is your home screen in Figma, showing your recent
              projects, team workspaces, and community resources. From here, you
              can open new files, start templates, and join or create teams.
            </dd>

            <div className="py-3" />

            <div className="w-full">
              <div className="flex flex-wrap gap-4 items-center justify-center">
                <div className="flex-1">
                  <img src={figma4.src} />
                </div>
              </div>
            </div>
            <div className="py-3" />
            <dt className="font-semibold"> The Toolbar</dt>
            <dd className="text-[15px] font-medium">
              Located at the bottom, the toolbar contains essential design tools
              like the Shape, Frame, Pen, and Text tools, as well as prototyping
              options and export settings.
            </dd>

            <dt className="font-semibold">The Layer Panel</dt>
            <dd className="text-[15px] font-medium">
              On the left, the Layers panel displays a hierarchy of all frames,
              groups, and elements within a design. It helps manage and organize
              your design elements.
            </dd>

            <dt className="font-semibold">Canvas</dt>
            <dd className="text-[15px] font-medium">
              The main workspace where you create and arrange your designs. The
              canvas supports infinite scaling, so you can design for various
              screen sizes and layouts.
            </dd>

            <dt className="font-semibold">Properties Panel</dt>
            <dd className="text-[15px] font-medium">
              On the right, the Properties panel allows you to modify selected
              elements, including adjustments to color, size, positioning,
              effects, and text styles.
            </dd>
          </dl>

          <div className="py-3" />

          <div className="w-full">
            <div className="flex flex-wrap gap-4 items-center justify-center">
              <div className="flex-1">
                <img src={figma5.src} />
              </div>
            </div>
          </div>
          <div className="py-3" />

          <p className="py-2 font-medium text-slate-600"></p>

          <h6 className="font-quicksand text-slate-800 font-semibold text-[17px] leading-snug">
            Navigating the canvas
          </h6>
          <dl>
            <dt className="font-semibold">Zooming and Panning</dt>
            <dd className="text-[15px] font-medium">
              Use your mouse wheel or pinch gestures on a trackpad to zoom in
              and out. For panning, hold the space bar and click-drag to move
              around the canvas, allowing you to focus on specific parts of your
              design.
            </dd>

            <dt className="font-semibold">Basic Controls</dt>
            <dd className="text-[15px] font-medium">
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
      <div className="mx-auto w-full max-w-3xl px-0 sm:px-2 md:px-4 lg:px-5 [&_img]:h-auto [&_img]:w-full [&_img]:rounded-xl [&_p]:leading-7 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-1.5 [&_ol]:list-decimal [&_ol]:pl-6 text-slate-800">
        <div className="py-3" />
        <div>
          <h4 className="font-quicksand text-slate-800 font-semibold text-[20px] leading-snug">
            Basic Tools and Functions
          </h4>
          <p className="py-2 font-medium text-slate-600">
            In Figma, frames serve as your artboards, helping you organize and
            design for specific screen sizes, like mobile, tablet, or desktop.
            To create a frame, select the Frame tool (shortcut: F) and choose a
            preset size or custom dimensions. You can create multiple frames to
            design various screens within the same file, which is helpful for
            organizing layouts and flows.
          </p>
          <p className="py-2 font-medium text-slate-600">
            Frames can be nested, duplicated, and aligned, making it easy to
            keep your design organized, especially when working on multi-screen
            projects.
          </p>
          <p className="py-2 font-medium text-slate-600"></p>
          <p className="py-2 font-medium text-slate-600"></p>
          <h6 className="font-quicksand text-slate-800 font-semibold text-[17px] leading-snug">
            Shapes and Lines
          </h6>
          <p className="py-2 font-medium text-slate-600">
            Figma’s Shape tool (shortcut: R for rectangle, O for ellipse) allows
            you to create basic shapes such as rectangles, ellipses, lines, and
            polygons. These shapes are foundational elements that can be used
            for buttons, backgrounds, icons, and more.
          </p>

          <div className="py-3" />

          <div className="w-full">
            <div className="flex flex-wrap gap-4 items-center justify-center">
              <div className="flex-1">
                <img src={figma6.src} />
              </div>
            </div>
          </div>
          <div className="py-3" />
          <h6 className="font-quicksand text-slate-800 font-semibold text-[17px] leading-snug">
            Pen Tool and Bezier Curves
          </h6>
          <dl>
            <dt className="font-semibold">Pen Tool</dt>
            <dd className="text-[15px] font-medium">
              Figma’s Pen tool (shortcut: P) allows you to create custom paths,
              essential for icons, logos, and illustrations. With the Pen tool,
              you can click to create points connected by straight lines or drag
              to create curves.
            </dd>

            <dt className="font-semibold">Bezier Curves</dt>
            <dd className="text-[15px] font-medium">
              By adjusting handles on each point, you can control the direction
              and curvature of lines to create smooth and complex shapes. This
              is particularly useful for creating organic and intricate shapes.
            </dd>
          </dl>
          <h6 className="font-quicksand text-slate-800 font-semibold text-[17px] leading-snug">
            Text Tool
          </h6>
          <dl>
            <dt className="font-semibold">Adding Text</dt>
            <dd className="text-[15px] font-medium">
              Figma’s Text tool (shortcut: T) enables you to add and edit text,
              which is essential for designing interfaces with labels, headers,
              buttons, and body content.
            </dd>

            <dt className="font-semibold">Font Selection and Adjustment</dt>
            <dd className="text-[15px] font-medium">
              You can choose from Figma’s integrated Google Fonts or upload
              custom fonts, with options to adjust font size, weight, line
              height, and letter spacing.
            </dd>
            <dt className="font-semibold">Alignment</dt>
            <dd className="text-[15px] font-medium">
              Text elements can be aligned within frames or relative to other
              design elements, and Figma’s alignment tools help keep text
              consistently spaced and visually balanced.
            </dd>
          </dl>
        </div>
      </div>
      <div className="mx-auto w-full max-w-3xl px-0 sm:px-2 md:px-4 lg:px-5 [&_img]:h-auto [&_img]:w-full [&_img]:rounded-xl [&_p]:leading-7 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-1.5 [&_ol]:list-decimal [&_ol]:pl-6 text-slate-800">
        <div className="py-3" />
        <div>
          <h4 className="font-quicksand text-slate-800 font-semibold text-[20px] leading-snug">
            Working with Colors and Styles
          </h4>
          <h6 className="font-quicksand text-slate-800 font-semibold text-[17px] leading-snug">
            Color Picker and Fill Options
          </h6>

          <dl>
            <dt className="font-semibold">Using the Color Picker</dt>
            <dd className="text-[15px] font-medium">
              Figma’s color picker lets you select colors from the palette,
              enter HEX/RGB values, or sample colors directly from the canvas
              with the eyedropper tool. This tool is essential for maintaining
              brand consistency and creating cohesive color schemes across your
              designs.
            </dd>
            <dt className="font-semibold">Gradients and Fills</dt>
            <dd className="text-[15px] font-medium">
              Figma supports linear, radial, and angular gradients, along with
              solid fills. You can customize each gradient stop for smooth
              transitions and apply multiple fills to a single layer for complex
              effects. These fill options are especially useful for creating
              depth and emphasis within your designs.
            </dd>
          </dl>

          <div className="py-3" />

          <div className="w-full">
            <div className="flex flex-wrap gap-4 items-center justify-center">
              <div className="flex-1">
                <img src={figma7.src} />
              </div>
            </div>
          </div>
          <div className="py-3" />
          <h6 className="font-quicksand text-slate-800 font-semibold text-[17px] leading-snug">
            Creating Styles
          </h6>

          <dl>
            <dt className="font-semibold">Setting Up Color Styles</dt>
            <dd className="text-[15px] font-medium">
              Color styles are reusable color settings that ensure consistency
              across your project. Once created, these styles can be applied to
              any layer, making it easy to update the design universally if the
              brand colors change.
            </dd>
            <dt className="font-semibold">Text Styles</dt>
            <dd className="text-[15px] font-medium">
              You can also create and save text styles with specific fonts,
              sizes, and weights, which helps maintain a consistent typography
              hierarchy. Both color and text styles speed up the design process
              and make updating elements across multiple frames or pages
              effortless.
            </dd>
          </dl>
        </div>
      </div>
      <div className="mx-auto w-full max-w-3xl px-0 sm:px-2 md:px-4 lg:px-5 [&_img]:h-auto [&_img]:w-full [&_img]:rounded-xl [&_p]:leading-7 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-1.5 [&_ol]:list-decimal [&_ol]:pl-6 text-slate-800">
        <div className="py-3" />
        <div>
          <h4 className="font-quicksand text-slate-800 font-semibold text-[20px] leading-snug">
            Layer Management
          </h4>
          <p className="py-2 font-medium text-slate-600">
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
          <h6 className="font-quicksand text-slate-800 font-semibold text-[17px] leading-snug">
            Organizing Layers
          </h6>

          <dl>
            <dt className="font-semibold">Grouping and Arranging</dt>
            <dd className="text-[15px] font-medium">
              To keep your project organized, Figma allows you to group layers
              (shortcut: Cmd/Ctrl + G), making it easier to manage multiple
              elements as a single unit. Additionally, arranging layers by
              moving them up or down helps structure your design’s layout,
              especially when elements overlap.
            </dd>
            <dt className="font-semibold">Labeling Layers</dt>
            <dd className="text-[15px] font-medium">
              Naming your layers descriptively improves project navigation,
              particularly when collaborating with others or revisiting your
              project after time. Clear labels can also speed up alignment and
              selection of specific elements.
            </dd>
          </dl>

          <h6 className="font-quicksand text-slate-800 font-semibold text-[17px] leading-snug">
            Layer Visibility and Locking
          </h6>

          <dl>
            <dt className="font-semibold">Managing Visibility</dt>
            <dd className="text-[15px] font-medium">
              Layers can be toggled visible or hidden, which is useful for
              trying out different layout options without deleting elements.
              This feature is helpful during prototyping or when testing
              different visual treatments.
            </dd>
            <dt className="font-semibold">Locking Layers</dt>
            <dd className="text-[15px] font-medium">
              Locking layers prevents accidental edits to essential elements,
              which is especially useful when you’re working on top of a complex
              background or interface grid. Locked layers remain visible but
              can’t be moved or edited, ensuring a stable workspace.
            </dd>
          </dl>
        </div>
      </div>

      <div className="mx-auto w-full max-w-3xl px-0 sm:px-2 md:px-4 lg:px-5 [&_img]:h-auto [&_img]:w-full [&_img]:rounded-xl [&_p]:leading-7 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-1.5 [&_ol]:list-decimal [&_ol]:pl-6 text-slate-800">
        <div className="py-3" />
        <div>
          <h4 className="font-quicksand text-slate-800 font-semibold text-[20px] leading-snug">
            Components and Reusability
          </h4>
          <h6 className="font-quicksand text-slate-800 font-semibold text-[17px] leading-snug">
            Creating Components
          </h6>
          <p className="py-2 font-medium text-slate-600">
            In Figma, components are design elements that can be reused across
            different screens and layouts. To create a component, you can select
            any design element (like a button or icon) and choose "Create
            Component" (shortcut: Cmd/Ctrl + Alt + K). This feature helps
            maintain consistency and saves time, as changes made to the main
            component (master) update all instances of it.
          </p>
          <h6 className="font-quicksand text-slate-800 font-semibold text-[17px] leading-snug">
            Using and Updating Components
          </h6>
          <p className="py-2 font-medium text-slate-600">
            Components can be dragged from the "Assets" panel into any frame,
            allowing you to use them repeatedly throughout the design.
          </p>
          <p className="py-2 font-medium text-slate-600">
            When you edit the master component, all instances automatically
            reflect those changes. You can override specific properties in each
            instance (like text or colors) for flexibility while retaining
            consistency.
          </p>

          <dl>
            <dt className="font-semibold">Grouping and Arranging</dt>
            <dd className="text-[15px] font-medium">
              To keep your project organized, Figma allows you to group layers
              (shortcut: Cmd/Ctrl + G), making it easier to manage multiple
              elements as a single unit. Additionally, arranging layers by
              moving them up or down helps structure your design’s layout,
              especially when elements overlap.
            </dd>
            <dt className="font-semibold">Labeling Layers</dt>
            <dd className="text-[15px] font-medium">
              Naming your layers descriptively improves project navigation,
              particularly when collaborating with others or revisiting your
              project after time. Clear labels can also speed up alignment and
              selection of specific elements.
            </dd>
          </dl>

          <h6 className="font-quicksand text-slate-800 font-semibold text-[17px] leading-snug">
            Layer Visibility and Locking
          </h6>

          <dl>
            <dt className="font-semibold">Managing Visibility</dt>
            <dd className="text-[15px] font-medium">
              Layers can be toggled visible or hidden, which is useful for
              trying out different layout options without deleting elements.
              This feature is helpful during prototyping or when testing
              different visual treatments.
            </dd>
            <dt className="font-semibold">Locking Layers</dt>
            <dd className="text-[15px] font-medium">
              Locking layers prevents accidental edits to essential elements,
              which is especially useful when you’re working on top of a complex
              background or interface grid. Locked layers remain visible but
              can’t be moved or edited, ensuring a stable workspace.
            </dd>
          </dl>
        </div>
      </div>
      <div className="mx-auto w-full max-w-3xl px-0 sm:px-2 md:px-4 lg:px-5 [&_img]:h-auto [&_img]:w-full [&_img]:rounded-xl [&_p]:leading-7 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-1.5 [&_ol]:list-decimal [&_ol]:pl-6 text-slate-800">
        <div className="py-3" />
        <div>
          <h4 className="font-quicksand text-slate-800 font-semibold text-[20px] leading-snug">
            Exporting Designs
          </h4>
          <h6 className="font-quicksand text-slate-800 font-semibold text-[17px] leading-snug">
            Exporting Assets
          </h6>
          <p className="py-2 font-medium text-slate-600">
            Exporting Frames, Layers, and Assets: Figma allows you to export
            individual layers, frames, or selected elements in various formats,
            including PNG, SVG, and PDF. This is useful for sharing assets with
            developers or clients. Select the item and use the “Export” option
            to choose your format and scale.
          </p>
          <h6 className="font-quicksand text-slate-800 font-semibold text-[17px] leading-snug">
            Export Settings
          </h6>
          <p className="py-2 font-medium text-slate-600">
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
