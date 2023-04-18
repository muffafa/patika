import { expect } from "chai";
import hre from "hardhat";
import { time } from "@nomicfoundation/hardhat-network-helpers";
import { Contract } from "ethers";

describe("Lock", function () {
  let counter: Contract;

  beforeEach(async function () {
    const Counter = await hre.ethers.getContractFactory("Counter");
    counter = await Counter.deploy();
  });

  it("Add must be true", async function () {
    await counter.add(5, 2);
    expect(7).to.equal(await counter.total());
  });

  it("Subtract must be true", async function () {
    await counter.subtract(5, 2);
    expect(3).to.equal(await counter.subtracted());
  });

  it("Multiply must be true", async function () {
    await counter.multiply(5, 2);
    expect(10).to.equal(await counter.multiplied());
  });

  it("Dvide must be true", async function () {
    await counter.dvide(6, 2);
    expect(3).to.equal(await counter.divided());
  });

  it("Dvider must be different from zero", async function () {
    await expect(counter.dvide(6, 0)).to.be.revertedWith(
      "divider cannot be zero"
    );
  });
});
