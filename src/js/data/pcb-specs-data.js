/**
 * PCB & PCBA Technical Capabilities & Order Workflow Data
 * Extracted and enhanced from legacy reference documentation.
 */

export const pcbProductionCapabilities = [
  {
    "title": "PCB Specifications",
    "rows": [
      {
        "feature": "Layer count",
        "capability": "1,2,4,6 layers",
        "notes": "The number of copper layers in the board.",
        "patternImg": null
      },
      {
        "feature": "Controlled Impedance",
        "capability": "4/6 layer, default layer stack-up",
        "notes": "",
        "patternImg": null
      },
      {
        "feature": "Material",
        "capability": "FR-4",
        "notes": "FR-4 Standard Tg 130-140/ Tg 155",
        "patternImg": "/images/table/pcbSecifications1.e0700ce.webp"
      },
      {
        "feature": "Dielectric constant",
        "capability": "4.5(double-sided PCB)",
        "notes": "7628 Prepreg 4.6 3313 Prepreg 4.05 2116 Prepreg 4.25",
        "patternImg": null
      },
      {
        "feature": "Max. Dimension",
        "capability": "400x500mm",
        "notes": "The maximum dimension AskChips can accept",
        "patternImg": "/images/table/pcbSecifications2.a19e511.webp"
      },
      {
        "feature": "Dimension Tolerance",
        "capability": "±0.2mm",
        "notes": "±0.2mm for CNC routing, and ±0.4mm for V-scoring",
        "patternImg": null
      },
      {
        "feature": "Board Thickness",
        "capability": "0.4/0.6/0.8/1.0/1.2/1.6/2.0mm",
        "notes": "The thickness of finished board.",
        "patternImg": "/images/table/pcbSecifications3.8c707e8.webp"
      },
      {
        "feature": "Thickness Tolerance ( Thickness≥1.0mm)",
        "capability": "± 10%",
        "notes": "e.g. For the 1.6mm board thickness, the finished board thickness ranges from 1.44mm(T-1.6×10%) to 1.76mm(T+1.6×10%)",
        "patternImg": null
      },
      {
        "feature": "Thickness Tolerance ( Thickness&lt;1.0mm)",
        "capability": "± 0.1mm",
        "notes": "e.g. For the 0.8mm board thickness, the finished board thickness ranges from 0.7mm(T-0.1) to 0.9mm(T+0.1).",
        "patternImg": null
      },
      {
        "feature": "Finished Outer Layer Copper",
        "capability": "1 oz/2 oz (35um/70um)",
        "notes": "Finished copper weight of outer layer is 1oz or 2oz.",
        "patternImg": "/images/table/pcbSecifications4.f70cf86.webp"
      },
      {
        "feature": "Finished Inner Layer Copper",
        "capability": "0.5 oz (17.5um)",
        "notes": "Finished copper weight of inner layer is 0.5oz by default. 2 oz inner copper weight is available for 4-layer PCBs with 1.6mm thickness/JLC3313 stackup/2oz outer copper weight.",
        "patternImg": "/images/table/pcbSecifications5.cb04603.webp"
      },
      {
        "feature": "Drill Hole Size",
        "capability": "0.20mm- 6.30mm",
        "notes": "Min. drill size is 0.20mm. Max. drill size is 6.30mm.",
        "patternImg": "/images/table/holeSize1.ec49ea2.webp"
      },
      {
        "feature": "Drill Hole Size Tolerance",
        "capability": "+0.13/-0.08mm",
        "notes": "e.g. for the 0.6mm hole size, the finished hole size between 0.52mm to 0.73mm is acceptable.",
        "patternImg": null
      },
      {
        "feature": "Blind/Buried Vias",
        "capability": "Don’t support",
        "notes": "Currently we don't support Blind/Buried Vias, only make through holes.",
        "patternImg": "/images/table/blind.b110887.webp"
      },
      {
        "feature": "Min. Via hole size",
        "capability": "0.2mm",
        "notes": "For Single&amp;Double Layer PCB, the minimum via hole size is 0.3mm;For Multi Layer PCB, the minimum via hole size is 0.2mm",
        "patternImg": "/images/table/holeSize2.8db704f.webp"
      },
      {
        "feature": "Min. Via diameter",
        "capability": "0.4mm",
        "notes": "For Single&amp;Double Layer PCB, the minimum Via diameter is 0.5mm; For Multi Layer PCB, the minimum via diameter is 0.45mm(Limitation 0.4mm).",
        "patternImg": "/images/table/holeSize3.acfc46c.webp"
      },
      {
        "feature": "PTH hole Size",
        "capability": "0.20mm - 6.35mm",
        "notes": "The annular ring size will be enlarged to 0.15mm in production.",
        "patternImg": "/images/table/PTH.cda4667.webp"
      },
      {
        "feature": "Pad Size",
        "capability": "Minimum 1.0mm",
        "notes": "The pad size will be enlarged by 0.5mm than the hole size. The minimum size of annular ring around plated through hole pads is 0.25mm. If the recommended sizes are not respected then the pad will not be produced properly.",
        "patternImg": "/images/table/holeSize4.d8424c0.webp"
      },
      {
        "feature": "Min. Non-plated holes",
        "capability": "0.50mm",
        "notes": "The minimum NPTH dimension is 0.50mm, Please add the NPTH in the mechanical layer or keep out layer.",
        "patternImg": "/images/table/holeSize5.ae7eb5b.webp"
      },
      {
        "feature": "NPTH",
        "capability": "0.2mm",
        "notes": "We make NPTH via dry sealing film process, if customer would like a NPTH but around with pad/copper, our engineer will dig out around pad/copper about 0.2mm-0.25mm, otherwise the metal potion will be flowed into the hole and it becomes a PTH. (there will be no copper dig out optimization for single board).",
        "patternImg": "/images/table/npth.2fc861f.webp"
      },
      {
        "feature": "Min. Plated Slots",
        "capability": "0.5mm",
        "notes": "The minimum plated slot width is 0.5mm, which is drawn with a pad.",
        "patternImg": "/images/table/holeSize6.c536043.webp"
      },
      {
        "feature": "Min. Non-Plated Slots",
        "capability": "1.0mm",
        "notes": "The minimum Non-Plated Slot Width is 1.0mm, please draw the slot outline in the mechanical layer(GML or GKO)",
        "patternImg": "/images/table/holeSize7.9cf70bc.webp"
      },
      {
        "feature": "Min. Castellated Holes",
        "capability": "0.60mm",
        "notes": "The minimum diameter of castellated holes is 0.60mm.",
        "patternImg": "/images/table/holeSize8.c5ff360.webp"
      },
      {
        "feature": "Hole size Tolerance (Plated)",
        "capability": "+0.13mm/-0.08mm",
        "notes": "e.g. for the 1.00mm Plated hole, the finished hole size between 0.92mm to 1.13mm is acceptable.",
        "patternImg": "/images/table/holeSize9.fa8106a.webp"
      },
      {
        "feature": "Hole size Tolerance (Non-Plated)",
        "capability": "±0.2mm",
        "notes": "e.g. for the 1.00mm Non-Plated hole, the finished hole size between 0.80mm to 1.20mm is acceptable.",
        "patternImg": "/images/table/holeSize10.c9fe4d8.webp"
      },
      {
        "feature": "Rectangle Hole/Slot",
        "capability": "Don’t support",
        "notes": "Rectangle/Square Slots, we don't make rectangular or square plated holes,only make oval or round plated slots. For non-plated slots, rounded corner-rectangular or square slots are supported. The recommended minimum size is 3x3mm.",
        "patternImg": "/images/table/holeSize11.adaef31.webp"
      },
      {
        "feature": "1oz Copper",
        "capability": "0.13mm",
        "notes": "0.3mm",
        "patternImg": "/images/table/annularRing1.9d82499.webp"
      },
      {
        "feature": "2oz Copper",
        "capability": "0.2mm",
        "notes": "0.3mm",
        "patternImg": null
      }
    ]
  },
  {
    "title": "Minimum clearance",
    "rows": [
      {
        "feature": "Hole to hole clearance(Different nets)",
        "capability": "0.5mm",
        "notes": "",
        "patternImg": "/images/table/minimumClearance1.288629d.webp"
      },
      {
        "feature": "Via to Via clearance(Same nets)",
        "capability": "0.254mm",
        "notes": "",
        "patternImg": "/images/table/minimumClearance1.288629d.webp"
      },
      {
        "feature": "Pad to Pad clearance(Pad without hole, Different nets)",
        "capability": "0.127mm",
        "notes": "",
        "patternImg": "/images/table/PadClearance.84451e5.webp"
      },
      {
        "feature": "Pad to Pad clearance(Pad with hole, Different nets)",
        "capability": "0.5mm",
        "notes": "",
        "patternImg": "/images/table/minimumClearance1.288629d.webp"
      },
      {
        "feature": "Via to Track",
        "capability": "0.254mm",
        "notes": "",
        "patternImg": "/images/table/Track.e6a7249.webp"
      },
      {
        "feature": "PTH to Track",
        "capability": "0.33mm",
        "notes": "",
        "patternImg": "/images/table/Track.e6a7249.webp"
      },
      {
        "feature": "NPTH to Track",
        "capability": "0.254mm",
        "notes": "",
        "patternImg": "/images/table/Track.e6a7249.webp"
      },
      {
        "feature": "Pad to Track",
        "capability": "0.2mm",
        "notes": "",
        "patternImg": "/images/table/minimumClearance4.5b848da.webp"
      }
    ]
  },
  {
    "title": "Minimum trace width and spacing",
    "rows": [
      {
        "feature": "1-2 Layers",
        "capability": "5mil (0.127mm)",
        "notes": "5mil (0.127mm)",
        "patternImg": "/images/table/minimumTraceWidthAndSpacing.3e2f1f9.webp"
      },
      {
        "feature": "4-6 Layers",
        "capability": "3.5mil (0.09mm)",
        "notes": "3.5mil (0.09mm)",
        "patternImg": null
      },
      {
        "feature": "2oz Copper weight",
        "capability": "8mil (0.2mm)",
        "notes": "8mil (0.2mm)",
        "patternImg": null
      }
    ]
  },
  {
    "title": "BGA",
    "rows": [
      {
        "feature": "1/2 layers",
        "capability": "0.25 mm",
        "notes": "0.127mm",
        "patternImg": "/images/table/BGA_PC.df4f0ec.webp"
      },
      {
        "feature": "4/6 layers",
        "capability": "0.25 mm",
        "notes": "0.127mm",
        "patternImg": null
      }
    ]
  },
  {
    "title": "Solder Mask",
    "rows": [
      {
        "feature": "Solder mask opening/ expansion",
        "capability": "0.05mm",
        "notes": "The solder mask should have a minimum of a 0.05 mm \"growth/mask opening\" around the pad to allow for any mis-registration.",
        "patternImg": "/images/table/solderMask1.b1969df.webp"
      },
      {
        "feature": "Solder bridge",
        "capability": "0.2mm(green) 0.254mm(other colors)",
        "notes": "To have solder mask bridge, the spacing between copper pads edge must be 0.2mm (8mils) or more.",
        "patternImg": "/images/table/solderMask2.0f7ac85.webp"
      },
      {
        "feature": "Solder mask color",
        "capability": "green, red, yellow, blue, white, and black.",
        "notes": "We use LPI (Liquid Photo Imageable) solder mask. It is the most common type of mask used today.",
        "patternImg": null
      },
      {
        "feature": "Solder mask dielectric constant",
        "capability": "3.8",
        "notes": "",
        "patternImg": null
      },
      {
        "feature": "Solder mask thickness",
        "capability": "10-15UM",
        "notes": "",
        "patternImg": null
      }
    ]
  },
  {
    "title": "Legend",
    "rows": [
      {
        "feature": "Minimum Line Width",
        "capability": "6 mil (0.153mm)",
        "notes": "Characters width less than 6mil(0.153mm) will be unidentifiable.",
        "patternImg": "/images/table/legend1.9f62290.webp"
      },
      {
        "feature": "Minimum text height",
        "capability": "40 mil (1.0mm)",
        "notes": "Characters height less than 40 mil(1.0mm) will be unidentifiable.",
        "patternImg": "/images/table/legend2.f34bf58.webp"
      },
      {
        "feature": "Character width to height ratio",
        "capability": "1:6",
        "notes": "The preferred ratio of width to height is 1:6.",
        "patternImg": "/images/table/legend3.241eadb.webp"
      },
      {
        "feature": "Hollow-carved Character width to height ratio",
        "capability": "1:6",
        "notes": "The preferred ratio of width to height is 1:6",
        "patternImg": "/images/table/hollowCarved.2b1ffa7.webp"
      },
      {
        "feature": "Pad To Silkscreen",
        "capability": "0.15mm",
        "notes": "The Minimum Distance Between Pad and Silkscreen is 0.15mm.",
        "patternImg": "/images/table/legend4.a707d4b.webp"
      }
    ]
  },
  {
    "title": "Board Outlines",
    "rows": [
      {
        "feature": "Trace to Outline",
        "capability": "0.2mm",
        "notes": "Ships as individual board(Rounting):Trace to Outline≥0.2mm",
        "patternImg": "/images/table/boardOutline1.bb54b28.webp"
      },
      {
        "feature": "Trace to V-cut line",
        "capability": "0.4mm",
        "notes": "Ship as panel with V-scoring: Trace to V-cut line≥0.4mm",
        "patternImg": "/images/table/boardOutline2.85c1d29.webp"
      }
    ]
  },
  {
    "title": "Panelization",
    "rows": [
      {
        "feature": "Panelization without space",
        "capability": "0mm",
        "notes": "The space between boards is 0mm.",
        "patternImg": "/images/table/panelization1.7286584.webp"
      },
      {
        "feature": "Panelization with space",
        "capability": "2mm",
        "notes": "Make sure the space between boards should be ≥2mm,otherwise it will be hard to process for rounding.",
        "patternImg": "/images/table/panelization2.3d5282c.webp"
      },
      {
        "feature": "Panelized Round board",
        "capability": "≥20mmx20mm",
        "notes": "The single round board size should be≥20mmx20mm. Panelize with stamp holes and add tooling strips on four board edges",
        "patternImg": "/images/table/panelization3.c6dc4c8.webp"
      },
      {
        "feature": "Panelized castellated holes board",
        "capability": "Panelize with stamp holes and add tooling strips on four board edges",
        "notes": "The distance between castellated hole and board corner should be larger than 2mm. Recommended diameter of stamp hole is 0.5mm-0.8mm; Recommended distance between the two stamp holes is 0.2-0.3mm",
        "patternImg": "/images/table/5_07.5706b04.webp"
      },
      {
        "feature": "Min. Width of Breakaway Tab",
        "capability": "4mm",
        "notes": "The minimum width of breakaway tab is 4mm. For breakaway with mouse-bites, the minimum width is 5mm.",
        "patternImg": "/images/table/Breakaway.a9bb077.webp"
      },
      {
        "feature": "Min. Edge Rails",
        "capability": "3mm",
        "notes": "If choosing panel by AskChips, we will add 5mm edge rails on both sides by default.",
        "patternImg": "/images/table/panelization6.10ccbed.webp"
      }
    ]
  }
];

export const pcbaCapabilities = [
  {
    "feature": "Assembly Types",
    "economic": "Single sided placement (SMT/Thru-hole)",
    "standard": "Single &amp; double sided placement (SMT/Thru-hole)"
  },
  {
    "feature": "PCB Layer",
    "economic": "2,4,6 layers",
    "standard": "1 - 6 layers"
  },
  {
    "feature": "Thickness",
    "economic": "0.8mm - 1.6mm",
    "standard": "0.4mm - 2.0mm"
  },
  {
    "feature": "Dimension",
    "economic": "Single PCB Size: 2 Layer: 10x10mm - 480x320mm 4&amp;6 Layer: 10x10mm - 350x320mm PCB Panel Size: 10x10mm - 250x250mm",
    "standard": "Single PCB Size: 70x70mm - 400x500mm PCB Panel Size: 70x70mm - 250x250mm"
  },
  {
    "feature": "Order Volume",
    "economic": "2 - 50 pcs",
    "standard": "2 - 80000 pcs"
  },
  {
    "feature": "Surface Finish",
    "economic": "Limited by specific options",
    "standard": "No limit"
  },
  {
    "feature": "PCB Color",
    "economic": "Limited by specific options",
    "standard": "No limit"
  },
  {
    "feature": "Delivery Format",
    "economic": "Single PCB, Panel with mouse bites",
    "standard": "Single PCB, Panel with mouse bites, Panel with V-cut"
  },
  {
    "feature": "Edge Rails",
    "economic": "Not necessary",
    "standard": "Necessary"
  },
  {
    "feature": "Fiducials",
    "economic": "Not necessary",
    "standard": "Necessary"
  },
  {
    "feature": "Minimum Package",
    "economic": "0402",
    "standard": "0201"
  },
  {
    "feature": "Minimum IC Pin Spacing",
    "economic": "0.4mm",
    "standard": "0.35mm"
  },
  {
    "feature": "Minimum BGA Spacing",
    "economic": "0.5mm",
    "standard": "0.5mm"
  },
  {
    "feature": "Reflow temperature",
    "economic": "255+/-5 °C （not adjustable)",
    "standard": "240+/-5 °C"
  },
  {
    "feature": "SPI",
    "economic": "No",
    "standard": "Yes"
  },
  {
    "feature": "AOI",
    "economic": "Yes",
    "standard": "Yes"
  },
  {
    "feature": "Visual Inspection",
    "economic": "Yes",
    "standard": "Yes"
  },
  {
    "feature": "X-ray Inspection",
    "economic": "Yes",
    "standard": "Yes"
  },
  {
    "feature": "Build time",
    "economic": "1 - 3 days",
    "standard": "≥ 4 days"
  },
  {
    "feature": "2L",
    "economic": "0.8",
    "standard": "Green"
  },
  {
    "feature": "1",
    "economic": "Green/Black",
    "standard": "HASL- Leaded/Lead free/ENIG"
  },
  {
    "feature": "1.2",
    "economic": "Green/Black",
    "standard": "HASL- Leaded/Lead free/ENIG"
  },
  {
    "feature": "1.6",
    "economic": "Green / Black(ENIG not supported /Blue&amp;Red&amp;White(HASL-Leaded,5-30pcs)",
    "standard": "HASL- Leaded/Lead free/ENIG"
  },
  {
    "feature": "4L",
    "economic": "1",
    "standard": "Green"
  },
  {
    "feature": "1.2/1.6",
    "economic": "Green",
    "standard": "HASL- Leaded/Lead free/ENIG"
  },
  {
    "feature": "6L",
    "economic": "1.6",
    "standard": "Green"
  }
];

export const orderWorkflowSteps = [
  {
    "step": 1,
    "title": "CUSTOMER QUERY",
    "description": "Submit your RFQ inquiry with project timeline and target volume.",
    "icon": "/images/how/01.webp"
  },
  {
    "step": 2,
    "title": "UPLOAD GERBER FILES",
    "description": "Send Gerber RS-274X/ODB++ files and bill of materials (BOM).",
    "icon": "/images/how/02.webp"
  },
  {
    "step": 3,
    "title": "VERIFY PROCEDURE",
    "description": "Automated DFM check and CAM engineering verification.",
    "icon": "/images/how/03.webp"
  },
  {
    "step": 4,
    "title": "AskChips FEEDBACK",
    "description": "Technical feedback, stackup confirmation, and EQ clearance.",
    "icon": "/images/how/04.webp"
  },
  {
    "step": 5,
    "title": "PROFORMA INVOICE",
    "description": "Comprehensive itemized quotation and proforma invoice issuance.",
    "icon": "/images/how/05.webp"
  },
  {
    "step": 6,
    "title": "PAYMENT",
    "description": "Secure payment via wire transfer, credit card, or escrow terms.",
    "icon": "/images/how/06.webp"
  },
  {
    "step": 7,
    "title": "PRODUCTION",
    "description": "Precision multi-layer fabrication and automated SMT assembly.",
    "icon": "/images/how/07.webp"
  },
  {
    "step": 8,
    "title": "QUALITY CONTROL",
    "description": "100% AOI optical, X-ray inspection, and flying probe testing.",
    "icon": "/images/how/08.webp"
  },
  {
    "step": 9,
    "title": "DELIVERY",
    "description": "Secure ESD packaging and expedited global shipping via DHL/FedEx.",
    "icon": "/images/how/09.webp"
  }
];
