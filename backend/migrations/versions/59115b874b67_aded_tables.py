"""aded tables

Revision ID: 59115b874b67
Revises: 
Create Date: 2022-08-05 14:13:25.813097

"""
from enum import unique
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '59115b874b67'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    op.create_table('users', 
    sa.Column('id', sa.CHAR(32), nullable=False),
    sa.Column('last_name', sa.String(length=50), nullable=False),
    sa.Column('name', sa.String(length=50), nullable=False),
    sa.Column('patronymic', sa.String(length=50), nullable=True),
    sa.Column('birthday', sa.String(length=1000), nullable=True),
    sa.Column('username', sa.String(length=50), nullable=False, unique=True),
    sa.Column('password_hash', sa.String(length=128), nullable=False),
    sa.PrimaryKeyConstraint('id')
    )


def downgrade():
    op.drop_table('users')
