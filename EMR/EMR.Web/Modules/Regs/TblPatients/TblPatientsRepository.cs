﻿
namespace EMR.Regs.Repositories
{
    using EMR.Regs.Entities;
    using Serenity;
    using Serenity.Data;
    using Serenity.Services;
    using System;
    using System.Data;
    using MyRow = Entities.TblPatientsRow;

    public class TblPatientsRepository
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

        private class MySaveHandler : SaveRequestHandler<MyRow, SaveRequest<MyRow>, SaveResponse>
        {
            protected override void AfterSave()
            {
                base.AfterSave();
                new SqlUpdate("TblPatients") // prefer fld.TableName
                   .Set("UserName", ((UserDefinition)Serenity.Authorization.UserDefinition).Username) // prefer fld.Prescribed
                   .Set("LastUpdated",DateTime.Now)
                   .Where(fld.Mrid == Request.Entity.Mrid.Value) 
                   .Execute(Connection, ExpectedRows.ZeroOrOne);
            }
        }
        private class MyDeleteHandler : DeleteRequestHandler<MyRow> { }
        private class MyRetrieveHandler : RetrieveRequestHandler<MyRow> { }
        private class MyListHandler : ListRequestHandler<MyRow> { }
    }
}