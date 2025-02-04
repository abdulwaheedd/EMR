﻿
namespace EMR.OPD.Repositories
{
    using Serenity;
    using Serenity.Data;
    using Serenity.Services;
    using System;
    using System.Data;
    using MyRow = Entities.LabTestRow;

    public class LabTestRepository
    {
        private static MyRow.RowFields fld { get { return MyRow.Fields; } }

        public SaveResponse Create(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            return new MySaveHandler().Process(uow, request, SaveRequestType.Create);
        }

        public SaveResponse Update(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            return new MySaveHandler().Process(uow, request, SaveRequestType.Update);
        }

        public DeleteResponse Delete(IUnitOfWork uow, DeleteRequest request)
        {
            return new MyDeleteHandler().Process(uow, request);
        }

        public RetrieveResponse<MyRow> Retrieve(IDbConnection connection, RetrieveRequest request)
        {
            return new MyRetrieveHandler().Process(connection, request);
        }

        public ListResponse<MyRow> List(IDbConnection connection, ListRequest request)
        {
            return new MyListHandler().Process(connection, request);
        }

        private class MySaveHandler : SaveRequestHandler<MyRow>
        {
            protected override void AfterSave()
            {
                base.AfterSave();
                if (this.IsCreate)
                {
                    new SqlUpdate("LabTest") // prefer fld.TableName
                   .Set("UserId", ((UserDefinition)Serenity.Authorization.UserDefinition).UserId) // prefer fld.Prescribed
                   .Set("Updated", DateTime.Now)
                   .Where(fld.VisitId == Request.Entity.VisitId.Value & fld.LabTestId == Request.Entity.LabTestId.Value)
                   .Execute(Connection, ExpectedRows.ZeroOrOne);
                }
                else if (this.IsUpdate)
                {
                    new SqlUpdate("LabTest") // prefer fld.TableName
                       .Set("UserId", ((UserDefinition)Serenity.Authorization.UserDefinition).UserId) // prefer fld.Prescribed
                       .Set("Updated", DateTime.Now)
                        .Where(fld.VisitId == Request.Entity.VisitId.Value & fld.LabTestId == Request.Entity.LabTestId.Value)
                       .Execute(Connection, ExpectedRows.ZeroOrOne);
                }
            }
        }
        private class MyDeleteHandler : DeleteRequestHandler<MyRow> { }
        private class MyRetrieveHandler : RetrieveRequestHandler<MyRow> { }
        private class MyListHandler : ListRequestHandler<MyRow> { }
    }
}