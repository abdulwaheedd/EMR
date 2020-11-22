
namespace EMR.Configs.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Configs"), TableName("[dbo].[TopographySub]")]
    [DisplayName("Topography Sub"), InstanceName("Topography Sub")]
    [LookupScript("Configs.TopographySub")]
    [ReadPermission(PermissionKeys.TopographySub.View)]
    [ModifyPermission(PermissionKeys.TopographySub.Update)]
    [InsertPermission(PermissionKeys.TopographySub.Insert)]
    [DeletePermission(PermissionKeys.TopographySub.Delete)]
    public sealed class TopographySubRow : Row, IIdRow, INameRow
    {
        [DisplayName("Toposub Id"), Identity]
        public Int32? ToposubId
        {
            get { return Fields.ToposubId[this]; }
            set { Fields.ToposubId[this] = value; }
        }

        [DisplayName("Icd0 Code"), Column("ICD0Code"), NotNull]
        public Int32? Icd0Code
        {
            get { return Fields.Icd0Code[this]; }
            set { Fields.Icd0Code[this] = value; }
        }

        [DisplayName("Topography S Name"), Size(255), NotNull, QuickSearch]
        public String TopographySName
        {
            get { return Fields.TopographySName[this]; }
            set { Fields.TopographySName[this] = value; }
        }

        [DisplayName("Topomain"), NotNull, ForeignKey("[dbo].[TopographyMain]", "TopomainId"), LeftJoin("jTopomain"),LookupInclude, TextualField("TopomainTopographyMName")]
        public Int32? TopomainId
        {
            get { return Fields.TopomainId[this]; }
            set { Fields.TopomainId[this] = value; }
        }

        [DisplayName("Topomain Topography M Name"), Expression("jTopomain.[TopographyMName]")]
        public String TopomainTopographyMName
        {
            get { return Fields.TopomainTopographyMName[this]; }
            set { Fields.TopomainTopographyMName[this] = value; }
        }

        [DisplayName("Topomain Icd0 Code"), Expression("jTopomain.[ICD0Code]")]
        public String TopomainIcd0Code
        {
            get { return Fields.TopomainIcd0Code[this]; }
            set { Fields.TopomainIcd0Code[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.ToposubId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.TopographySName; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public TopographySubRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field ToposubId;
            public Int32Field Icd0Code;
            public StringField TopographySName;
            public Int32Field TopomainId;

            public StringField TopomainTopographyMName;
            public StringField TopomainIcd0Code;
        }
    }
}
