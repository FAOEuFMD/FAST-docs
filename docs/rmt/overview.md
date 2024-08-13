---
sidebar_position: 1
---

# Overview

## What is the Risk Monitoring Tool (RMT)?

RMT is a tool and framework developed by the [European Commission for the Control of Foot-and-Mouth Disease](https://www.fao.org/eufmd/en/) (EuFMD) to monitor the risk of foot-and-mouth disease (FMD) and similar transboundary (FAST) disease transmission between countries.

It is for public officials with knowledge about FAST diseases and their local conditions (like livestock populations and animal trade).

To use the tool, users:

1. Select their home country, and the countries they want to evaluate risks with (source countries).
2. Review data about disease status and mitigation measures in the source countries. They may edit the data if they see something incorrect.
3. Review data about disease transmission pathways.
4. Enter data about the connections between their home country and each source country. For example: livestock and animal product trade, livestock populations near the border.
5. Receive calculated scores on the risk of FAST disease transmission, graphs to visualize the data, and the option to download results.

## Demo

## Tech stack

The RMT is a feature built onto the DB Manager. Please see their [documentation](/docs/db-manager/architecture) for more information on the tech stack.

Briefly, RMT uses:

- MySQL for the database
- Node.js/Express for back end
- Vue for front end, with Pinia for state management
- Tailwind CSS for styling

## Terminology and acronyms

- **FMD** - [Foot and Mouth Disease](https://woah.org/en/disease/foot-and-mouth-disease/)
- **RVF** - [Rift Valley Fever](https://www.cdc.gov/vhf/rvf/index.html)
- **PPR** - [Peste des Petits Ruminants](https://www.woah.org/en/disease/peste-des-petits-ruminants/) (aka “Goat Plague”)
- **LSD** - [Lumpy Skin Disease](https://www.woah.org/en/disease/lumpy-skin-disease/)
- **SGP** - [Sheep and Goat Pox](https://rr-asia.woah.org/en/projects/sheep-pox-and-goat-pox/)
- **FAST diseases** - [FMD And Similar Transboundary diseases](https://www.fao.org/eufmd/global-situation/about-fast-diseases/en/)
- **target country** - the user’s country
- **source country** - countries being evaluated (aka where the source of livestock is coming from)

## Resources

Please review the following resources to understand more about EuFMD's Risk Monitoring Tool:

- [EuFMD's webpage on RMT](https://www.fao.org/eufmd/tools/rmt-fast/en/)
- [Original RMT as an Excel sheet](https://docs.google.com/spreadsheets/d/1In-cu4ROEqjDh8nex12W2gFZx-6pJ0U_/edit?usp=drive_link&ouid=106400728932431541442&rtpof=true&sd=true)
- [Instructions for using RMT](https://drive.google.com/file/d/1ZDEqD-x_SH-2DYOJ830dsCZfwlFpDxmZ/view?usp=drive_link)
- [Summary description](https://drive.google.com/file/d/1WgH70XSs3QNReq6NMMzq2wQrGel7buKO/view?usp=drive_link)
- [Possible applications](https://drive.google.com/file/d/1gklD0nJsFrvoCX-aFir7xgmpeygMcgNd/view?usp=drive_link)
