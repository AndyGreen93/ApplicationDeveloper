using System;
using NUnit.Framework;
using ApplicationDeveloper.Data.Repositories;
using ApplicationDeveloper.Domain.Models;

namespace ApplicationDeveloper.UnitTest
{
    [TestFixture]
    public class TradesTest
    {
        private const int MaxCount = 500;

        [Test]
        public void GetTradesTest()
        {
            // Check to see if the trade count is correct.
            var tradeRepository = new TradeRepository();
            var trades = tradeRepository.GetTrades();
            int tradeCount = 0;

            foreach (var trade in trades)
            {
                tradeCount++;
            }

            Assert.AreEqual(MaxCount, tradeCount);
        }
    }
}
