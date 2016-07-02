using ApplicationDeveloper.Data.Repositories;
using System;
using System.Web.Http;

namespace ApplicationDeveloper.Controllers
{
    public class TradeValuesController : ApiController
    {
        // Get Trade data from TradeRepository.
        [HttpGet]
        public IHttpActionResult Get()
        {
            var repo = new TradeRepository();
            var trades = repo.GetTrades();
            if (trades == null)
            {
                return NotFound();
            }
            return Ok(trades);
        }
    }
}