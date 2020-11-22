
namespace EMR.Regs.Endpoints
{
    using Serenity;
    using Serenity.Data;
    using Serenity.Services;
    using System.Data;
    using System.Web.Mvc;
    using MyRepository = Repositories.TblPatientsRepository;
    using MyRow = Entities.TblPatientsRow;

    [RoutePrefix("Services/Regs/TblPatients"), Route("{action}")]
    [ConnectionKey(typeof(MyRow)), ServiceAuthorize(typeof(MyRow))]
    public class TblPatientsController : ServiceEndpoint
    {
        [HttpPost, AuthorizeCreate(typeof(MyRow))]
        public SaveResponse Create(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            return new MyRepository().Create(uow, request);
        }

        [HttpPost, AuthorizeUpdate(typeof(MyRow))]
        public SaveResponse Update(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            return new MyRepository().Update(uow, request);
        }
 
        [HttpPost, AuthorizeDelete(typeof(MyRow))]
        public DeleteResponse Delete(IUnitOfWork uow, DeleteRequest request)
        {
            return new MyRepository().Delete(uow, request);
        }

        [HttpPost]
        public RetrieveResponse<MyRow> Retrieve(IDbConnection connection, RetrieveRequest request)
        {
            return new MyRepository().Retrieve(connection, request);
        }

        [HttpPost]
        public ListResponse<MyRow> List(IDbConnection connection, ListRequest request)
        {
            //if (request.Criteria is BaseCriteria)
                //return new MyRepository().List(connection, request);
                return new MyRepository().List(connection, request);
            // Otherwise return an empty ListResponse
            //return new ListResponse<MyRow>();
        }

        public int UpdateHealthFacilities(IDbConnection connection)
        {
            int TenantId = 0;
            var user = User.Identity.Name;
            var usr = Administration.Entities.UserRow.Fields;
            if (!string.IsNullOrWhiteSpace(user))
            {
                var Users = connection.TryFirst<Administration.Entities.UserRow>(q => q
                    .Select(usr.UserId)
                    .Select(usr.TenantId)
                    .Where(usr.Username == user));
                TenantId = Users.TenantId.Value;
            }

            int? FacilityId = 0;

            var tnt = Administration.Entities.TenantRow.Fields;

            if (TenantId > 0)
            {
                var Tntents = connection.TryFirst<Administration.Entities.TenantRow>(q => q
                     .Select(tnt.TenantId)
                     .Select(tnt.FacilityId)
                     .Where(tnt.TenantId == TenantId));

                FacilityId = Tntents.FacilityId;
            }

            connection.Execute("UpdateNumberOfPatients",
               param: new
               {
                   FacilityId = FacilityId
               }, commandType: CommandType.StoredProcedure);
            return 0;
        }
    }
}
